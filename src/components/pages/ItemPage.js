import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Stars from '../items/Stars';

const ItemPage = () => {
  const [item, setItem] = useState(null);
  // the useParams hook gets the id passed over in Link
  const { id } = useParams();
  const url = `https://gp-super-store-api.herokuapp.com/item/${id}`;

  // must define a special fetchData function for single-items
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

  console.log(item);

  return (
    <main className='main item-page-main'>
      {item &&
        item.map((item) => {
          const {
            avgRating: rating,
            description,
            imageUrl: img,
            isOnSale: sale,
            name,
            price,
            stockCount,
          } = item;
          return (
            <div className='item-page'>
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
                <div className='item-page__form-wrap'>
                  <form className='item-page__form row align-items-center'>
                    <div className='col-auto'>
                      <label htmlFor='quantity' className='font-weight-bold'>
                        Quantity:
                      </label>
                    </div>
                    <div className='col-sm-2'>
                      <input
                        type='number'
                        className='item-page__quantity form-control text-center'
                        id='quantity'
                        placeholder='1'
                      />
                    </div>
                  </form>
                </div>
                <button
                  type='submit'
                  className='item-page__button btn btn-primary mt-3'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
    </main>
  );
};

export default ItemPage;
