import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Stars from '../items/Stars';
import { CartContext } from '../../contexts/CartContext';

const ItemPage = () => {
  // the useParams hook gets the id passed over in Link
  const { id } = useParams();
  const { addToCart, cart } = useContext(CartContext);
  const url = `https://gp-super-store-api.herokuapp.com/item/${id}`;
  // state for item data
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [numberInStock, setNumberInStock] = useState(null);
  const [exceedsStock, setExceedsStock] = useState(false);
  const [numberInCart, setNumberInCart] = useState(0);
  // controls successful add badge
  const [addSuccess, setAddSuccess] = useState(false);

  // must define a special fetchData function for single items
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url)
        .then((response) => setItem(response.data))
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

  // Setting the number of items in stock
  useEffect(() => {
    setNumberInStock(item && item.stockCount);
  }, [item]);

  // Update the number of current items in the cart
  useEffect(() => {
    if (!item) {
      return;
    }
    if (cart.length > 0) {
      const numberOfItems = cart.filter(
        (cartItem) => cartItem.name === item.name
      );
      if (numberOfItems.length > 0) {
        setNumberInCart(numberOfItems[0].quantity);
      }
    }
  }, [cart, item]);

  // sets cart count based on input value
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  // if input exceeds stock, an error is displayed
  const addItem = (e) => {
    e.preventDefault();
    if (numberInStock - numberInCart < 1 || quantity > numberInStock) {
      setAddSuccess(false);
      setExceedsStock(true);
    } else {
      // adds an item to the Context state
      addToCart(item, quantity);
      // changes local state
      setAddSuccess(true);
      setExceedsStock(false);
      // add success badge disappears after 2 seconds
      setTimeout(() => {
        setAddSuccess(false);
      }, 2000);
    }
    // // Setting the cart and the input value back to 1 after each submission.
    setQuantity(1);
  };

  return (
    <main className='main item-page-main'>
      {item && (
        <div className='item-page' key={id}>
          <div
            className='item-page__image'
            style={{ backgroundImage: `url('${item.imageUrl}')` }}
          ></div>
          <div className='item-page__text'>
            <h2 className='item-page__title'>{item.name}</h2>
            <div className='item-page__rating'>
              <Stars rating={item.avgRating} />
            </div>
            <hr className='item-page__hr' />
            <p className='item-page__description'>{item.description}</p>
            <p className='item-page__price font-weight-bold'>
              ${item.price.toFixed(2)}
            </p>
            <p className='item-page__stock font-weight-bold'>
              Stock: {numberInStock - numberInCart}
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
                    value={quantity}
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
            {numberInCart > 0 && (
              <p className='item-page__in-cart badge badge-success'>
                In your cart: {numberInCart}
              </p>
            )}
            {/* conditionally render an error if exceedsStock is true */}
            {exceedsStock && (
              <div className='item-page__alert alert alert-danger' role='alert'>
                You've selected more items than are in stock!
              </div>
            )}
            {addSuccess && (
              <div
                className='item-page__alert alert alert-success'
                role='alert'
              >
                Item Added!
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default ItemPage;
