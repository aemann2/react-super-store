import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';

function Item(props) {
  const { name, img, price, rating } = props;

  const handleError = (e) => {
    e.target.src = 'https://demofree.sirv.com/nope-not-here.jpg';
  };

  return (
    <div className='card'>
      <img
        className='card-img-top'
        src={img}
        alt={name}
        onError={handleError}
      />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <Stars rating={rating} />
        <p>${price}</p>
        <a href='#' className='btn btn-primary btn-center'>
          View Item
        </a>
      </div>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
};

export default Item;
