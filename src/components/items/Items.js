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

  console.log(items);

  return (
    <div>
      {items &&
        items.map((item) => {
          const { _id, name, imageUrl: img, price } = item;
          return <Item key={_id} name={name} img={img} price={price} />;
        })}
    </div>
  );
};

export default Items;

// <div>
// {items &&
//   items.map((item, index) => {
//     const { name, imageUrl: img, price } = item;
//     return (
//       <div className='card' style={{ width: '18rem' }} key={index}>
//         <img className='card-img-top' src={img} alt={name} />
//         <div className='card-body'>
//           <h5 className='card-title'>{name}</h5>
//           <p>stars</p>
//           <p>${price}</p>
//           <a href='#' className='btn btn-primary'>
//             View Item
//           </a>
//         </div>
//       </div>
//     );
//   })}
// </div>
