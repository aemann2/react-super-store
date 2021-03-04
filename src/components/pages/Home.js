import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [items, setItems] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc'
    );
    setItems(response.data.items);
  };

  fetchData();
  return (
    <div>
      {/* items && is the same as saying, "when items return (i.e., === true)"...*/}
      {items &&
        items.map((item, index) => {
          const { name, imageUrl: img, price } = item;
          return (
            <div className='card' style={{ width: '18rem' }} key={index}>
              <img className='card-img-top' src={img} alt={name} />
              <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                <p>stars</p>
                <p>${price}</p>
                <a href='#' className='btn btn-primary'>
                  View Item
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
