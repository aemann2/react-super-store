import React from 'react';
import PropTypes from 'prop-types';
import Item from '../items/Item';

const Deals = (props) => {
  const { items } = props;
  // filtering for items on sale
  const deals = items.filter((item) => item.isOnSale);

  return (
    <main className='main'>
      <div className='card-container'>
        {deals.length > 0 ? (
          deals.map((deal) => {
            const {
              _id: id,
              avgRating: rating,
              name,
              imageUrl: img,
              price,
              isOnSale: sale,
            } = deal;
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
          })
        ) : (
          <p className='apology'>
            Sorry, there are no items on sale at the moment
          </p>
        )}
      </div>
    </main>
  );
};

Deals.propTypes = {
  items: PropTypes.array,
};

export default Deals;
