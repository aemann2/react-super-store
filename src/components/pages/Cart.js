import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const totals = [];

  for (let i = 0; i < cart.length; i++) {
    totals.push(cart[i].quantity * cart[i].price);
  }

  const handleClick = () => {
    setCart([]);
  };

  return (
    <div className='cart-table'>
      {cart.length > 0 ? (
        <div>
          <table className='table table-striped '>
            <thead className='thead-light'>
              <tr>
                <th scope='col'>Item</th>
                <th scope='col'>Price</th>
                <th scope='col'>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className='bg-warning text-dark'>
                <th scope='row' colSpan='2'>
                  Total:
                </th>
                <td>${totals.reduce((acc, cur) => (acc += cur)).toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
          <Link
            onClick={handleClick}
            to={`/checkout`}
            className='btn btn-primary cart-table__btn btn-lg btn-block'
          >
            Check Out
          </Link>
        </div>
      ) : (
        <h2 className='cart-table__empty'>Your cart is empty!</h2>
      )}
    </div>
  );
};
export default Cart;
