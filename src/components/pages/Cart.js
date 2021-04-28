import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  // getting total cost of items * quantity
  const costTimesQuantityTotals = [];

  for (let i = 0; i < cart.length; i++) {
    costTimesQuantityTotals.push(cart[i].quantity * cart[i].price);
  }

  // checking out resets the cart
  const handleCheckout = () => {
    setCart([]);
  };

  // runs when clicking 'X' button
  const removeItem = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  // runs when changing item quantity
  const changeQuantity = (e, name) => {
    setCart([
      ...cart,
      cart.map((item) => {
        if (item.name === name) {
          // checking to make sure the value doesn't exceed the number in stock (item.max)
          if (e.target.value > item.max) {
            return (e.target.value = item.max - 1);
          }
          // if the check passes, the input value gets added to the quantity number
          return (item.quantity = +e.target.value);
        } else {
          return cart;
        }
      }),
    ]);
    // if the quantity for any item is less than 1, remove it from the cart list
    setCart(cart.filter((item) => item.quantity > 0));
  };

  return (
    <div className='cart-table'>
      {/* if the cart has any items, render a table */}
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
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <input
                        type='number'
                        size='1'
                        className='cart-table__input-box'
                        value={item.quantity}
                        onChange={(e) => changeQuantity(e, item.name)}
                      />
                      <button
                        onClick={() => removeItem(item.name)}
                        className='btn btn-danger btn-sm cart-table__remove-btn'
                      >
                        x
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className='bg-warning text-dark'>
                <th scope='row' colSpan='2'>
                  Total:
                </th>
                <td>
                  {/* adding costTimesQuantityTotals together to get the grand total */}
                  $
                  {costTimesQuantityTotals
                    .reduce((acc, cur) => (acc += cur))
                    .toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
          <Link
            onClick={handleCheckout}
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
