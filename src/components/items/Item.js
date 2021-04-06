import React, { useState, useEffect } from 'react';
import Stars from './Stars';
import axios from 'axios';

function Item(props) {
  const [item, setItem] = useState(null);
  const [cart, setCart] = useState(1);
  const [stock, setStock] = useState(null);
  const [exceedsStock, setExceedsStock] = useState(false);

  const { url } = props;

  // must define a special fetchData function for single items
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url)
        .then((response) => setItem([response.data]))
        .catch((err) => {
          if (err.response) {
            console.log(err.response);
          } else if (err.request) {
            console.log(err.request);
          } else {
            console.log('There has been an error');
          }
        });
    };
    fetchData();
  }, [url]);

  // Is this the right way to do this, or is there a better way to set the state of stock using async / await?
  useEffect(() => {
    setStock(item && item[0].stockCount);
  }, [item]);

  // sets cart count based on input value
  const handleChange = (e) => {
    setCart(e.target.value);
  };

  // if input exceeds stock, an error is displayed
  const addItem = (e) => {
    e.preventDefault();
    if (stock - cart < 0) {
      setExceedsStock(true);
    } else {
      setStock(stock - cart);
      setExceedsStock(false);
    }
    // // Setting the cart and the input value back to 1 after each submission.
    setCart(1);
  };

  return (
    <main className='main item-page-main'>
      {item &&
        item.map((item) => {
          const {
            _id: id,
            avgRating: rating,
            description,
            imageUrl: img,
            name,
            price,
          } = item;
          return (
            <div className='item-page' key={id}>
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
                <p className='item-page__stock font-weight-bold'>
                  Stock: {stock}
                </p>
                <div className='item-page__form-wrap'>
                  <form
                    className='item-page__form row align-items-center'
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
                        defaultValue='1'
                        value={cart}
                        onChange={handleChange}
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
                {/* conditionally render an error if exceedsStock is true */}
                {exceedsStock && (
                  <div
                    className='item-page__alert alert alert-danger'
                    role='alert'
                  >
                    You've selected more items than are in stock!
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </main>
  );
}

export default Item;
