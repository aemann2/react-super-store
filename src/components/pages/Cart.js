import React, { useContext } from 'react';
import { TestContext } from '../../contexts/CartContext';

const Cart = () => {
  const { item } = useContext(TestContext);
  return (
    <div>
      <p>This is the cart page</p>
      <p>{item}</p>
    </div>
  );
};
export default Cart;
