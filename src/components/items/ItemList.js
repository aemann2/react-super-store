import React from 'react';
import ItemCard from './ItemCard';
import PropTypes from 'prop-types';

// the component that renders the cards on Home and Deals page
const ItemList = ({ items }) => {
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
            <ItemCard
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

ItemList.propTypes = {
  items: PropTypes.array,
};

export default ItemList;
