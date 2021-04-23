import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
