import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, number) => {
    // checking to see if the product is already in the cart
    const existingProduct = cart.filter((p) => p.name === item.name);
    // if so, just increase the quantity number
    if (existingProduct.length > 0) {
      const withoutExistingProduct = cart.filter((p) => p.name !== item.name);
      const updateQuantity = {
        ...existingProduct[0],
        quantity: +existingProduct[0].quantity + +number,
      };
      setCart([...withoutExistingProduct, updateQuantity]);
      // otherwise, add a new item
    } else {
      setCart([
        ...cart,
        {
          name: item.name,
          price: item.price,
          quantity: +number,
          max: item.stockCount,
        },
      ]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
