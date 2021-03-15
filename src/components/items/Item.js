import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { name, img, price } = props;

  const handleError = (e) => {
    e.target.src = 'https://demofree.sirv.com/nope-not-here.jpg';
  };

  return (
    <div className='card' style={{ width: '18rem' }}>
      <img
        className='card-img-top'
        src={img}
        alt={name}
        onError={handleError}
      />
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
}

Item.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
};

export default Item;
