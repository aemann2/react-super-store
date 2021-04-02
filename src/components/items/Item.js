import React from 'react';
import Stars from './Stars';

function Item(props) {
  // error handling for images that return errors
  const {
    key,
    rating,
    description,
    img,
    name,
    price,
    handleChange,
    addItem,
    cart,
    stock,
    exceedsStock,
  } = props;
  return (
    <div className='item-page' key={key}>
      <div
        className='item-page__image'
        style={{ backgroundImage: `url('${img}')` }}
      ></div>
      <div className='item-page__text'>
        <h2 className='item-page__title'>{name}</h2>
        <div className='item-page__rating'>
          <Stars rating={rating} />
        </div>
        <hr className='item-page__hr' />
        <p className='item-page__description'>{description}</p>
        <p className='item-page__price font-weight-bold'>${price}</p>
        <p className='item-page__stock font-weight-bold'>Stock: {stock}</p>
        <div className='item-page__form-wrap'>
          <form
            className='item-page__form row align-items-center'
            onChange={handleChange}
            onSubmit={addItem}
          >
            <div className='col-auto'>
              <label htmlFor='quantity' className='font-weight-bold'>
                Quantity:
              </label>
            </div>
            <div className='col-sm-2'>
              <input
                type='number'
                min='0'
                className='item-page__quantity form-control text-center'
                id='quantity'
                defaultValue={cart}
              />
            </div>
            <button
              type='submit'
              className='item-page__button btn btn-primary mt-3'
            >
              Add to Cart
            </button>
          </form>
        </div>
        {exceedsStock && (
          <div className='item-page__alert alert alert-danger' role='alert'>
            You've selected more items than are in stock!
          </div>
        )}
      </div>
    </div>
  );
}

export default Item;
