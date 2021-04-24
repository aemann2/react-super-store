import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, number) => {
    const existingProduct = cart.filter((p) => p.name === item.name);
    if (existingProduct.length > 0) {
      const withoutExistingProduct = cart.filter((p) => p.name !== item.name);
      const updateQuantity = {
        ...existingProduct[0],
        quantity: +existingProduct[0].quantity + +number,
      };
      setCart([...withoutExistingProduct, updateQuantity]);
    } else {
      setCart([
        ...cart,
        { name: item.name, price: item.price, quantity: +number },
      ]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
