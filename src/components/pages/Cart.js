import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => {
            return <li key={item._id}>{item.name}</li>;
          })}
        </ul>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};
export default Cart;
