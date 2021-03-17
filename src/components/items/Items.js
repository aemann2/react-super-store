import React from 'react';
import Item from './Item';

const Items = (props) => {
  const { items } = props;

  return (
    <div className='card-container'>
      {items &&
        items.map((item) => {
          const {
            _id: id,
            avgRating: rating,
            name,
            imageUrl: img,
            price,
          } = item;
          return (
            <Item
              key={id}
              id={id}
              name={name}
              img={img}
              price={price}
              rating={rating}
            />
          );
        })}
    </div>
  );
};

export default Items;
