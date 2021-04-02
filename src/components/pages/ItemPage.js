import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Item from '../items/Item';

const ItemPage = () => {
  const [item, setItem] = useState(null);
  const [cart, setCart] = useState(1);
  const [stock, setStock] = useState(null);
  const [exceedsStock, setExceedsStock] = useState(false);
  // the useParams hook gets the id passed over in Link
  const { id } = useParams();
  const url = `https://gp-super-store-api.herokuapp.com/item/${id}`;

  // must define a special fetchData function for single-items
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url)
        .then((response) => setItem([response.data]))
        .catch((err) => {
          if (err.response) {
            console.log(err.response);
          } else if (err.request) {
            console.log(err.request);
          } else {
            console.log('There has been an error');
          }
        });
    };
    fetchData();
  }, [url]);

  // Is this the right way to do this, or is there a better way to set the state of stock using async / await?
  useEffect(() => {
    setStock(item && item[0].stockCount);
  }, [item]);

  const handleChange = (e) => {
    setCart(e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    if (stock - cart < 0) {
      setExceedsStock(true);
    } else {
      setStock(stock - cart);
      setExceedsStock(false);
    }
  };

  return (
    <main className='main item-page-main'>
      {item &&
        item.map((item) => {
          const {
            _id: id,
            avgRating: rating,
            description,
            imageUrl: img,
            name,
            price,
          } = item;
          return (
            <Item
              key={id}
              rating={rating}
              description={description}
              img={img}
              name={name}
              price={price}
              handleChange={handleChange}
              addItem={addItem}
              cart={cart}
              stock={stock}
              exceedsStock={exceedsStock}
            />
          );
        })}
    </main>
  );
};

export default ItemPage;
