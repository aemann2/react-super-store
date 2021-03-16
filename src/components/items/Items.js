import React, { useState, useEffect } from 'react';
import Item from './Item';
import axios from 'axios';

const Items = () => {
  const [items, setItems] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc'
    );
    setItems(response.data.items);
  };

  useEffect(() => fetchData(), []);

  return (
    <div className='card-container'>
      {items &&
        items.map((item) => {
          const { _id, name, imageUrl: img, price } = item;
          return <Item key={_id} name={name} img={img} price={price} />;
        })}
    </div>
  );
};

export default Items;
