import React from 'react';
import Item from '../items/Item';

const Deals = (props) => {
  const { items } = props;

  const deals = items.filter((item) => item.isOnSale);

  return (
    <div className='card-container'>
      {deals.length > 0 ? (
        deals.map((deal) => {
          const { _id, avgRating: rating, name, imageUrl: img, price } = deal;
          return (
            <Item
              key={_id}
              name={name}
              img={img}
              price={price}
              rating={rating}
            />
          );
        })
      ) : (
        <p className='apology'>
          Sorry, there are no items on sale at the moment
        </p>
      )}
    </div>
  );
};

export default Deals;
