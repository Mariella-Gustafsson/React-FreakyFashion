import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });


  const addToCart = (product) => {
    setCart((cart) => {
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
        const uppdatedCart = cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );

        localStorage.setItem('cart', JSON.stringify(updatedCart));

        return uppdatedCart;
      }

      const updatedCart = [...cart, { ...product, quantity: 1 }];
      
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      
      return updatedCart;
    });
  };

   const removeFromCart = (product) => {

    setCart((cart) => {
      const existingProduct = cart.find(item => item.id === product.id);

      if (existingProduct) {

        let updatedCart;

        if (product.quantity > 1) {
          updatedCart = cart.map(item =>
            item.id === product.id ? { ...item, quantity: product.quantity - 1 } : item
          )
        } else {
          updatedCart = cart.filter(item => item.id !== product.id);
        }

        localStorage.setItem('cart', JSON.stringify(updatedCart));

        return updatedCart;
      }

      return cart;
    });
  };

   const updateQuantity = (product, quantity) => {
    setCart((cart) => {
      const updatedCart = cart.map(item =>
        item.id === product ? { ...item, quantity } : item
      )

      localStorage.setItem('cart', JSON.stringify(updatedCart));

      return updatedCart;
    }
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);

};