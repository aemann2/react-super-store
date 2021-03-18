import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Stars from './Stars';

function Item(props) {
  const { id, name, img, price, rating, sale } = props;

  // error handling for images that return errors
  const handleError = (e) => {
    e.target.src = 'https://demofree.sirv.com/nope-not-here.jpg';
  };

  return (
    <div className='card border-dark'>
      <img
        className='card__img card-img-top'
        src={img}
        alt={name}
        onError={handleError}
      />
      <div className='card__body'>
        <Link to={`/item/${id}`}>
          <h5 className='card__title card-title'>{name}</h5>
        </Link>
        <Stars rating={rating} />
        <p className='card__price'>
          <b>${price}</b>
          {/* conditionally render the sale badge */}
          {sale && (
            <span className='card--space badge bg-danger text-light '>
              Sale!
            </span>
          )}
        </p>
        <Link to={`/item/${id}`} className='card__btn btn btn-primary'>
          View Item
        </Link>
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  sale: PropTypes.bool.isRequired,
};

export default Item;
