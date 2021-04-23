import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <p>This is the cart page</p>
      <ul>
        {cart.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default Cart;
