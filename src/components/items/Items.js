import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

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
            isOnSale: sale,
          } = item;
          return (
            <Item
              key={id}
              id={id}
              name={name}
              img={img}
              price={price}
              rating={rating}
              sale={sale}
            />
          );
        })}
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.array,
};

export default Items;
