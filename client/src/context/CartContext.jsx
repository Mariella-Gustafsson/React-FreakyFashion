import React, { createContext, useContext, useState } from 'react';

// Skapa en context för varukorgen
const CartContext = createContext();

// En komponent som levererar cart-data till alla barnkomponenter
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Försök att hämta varukorgen från localStorage vid initialisering
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });


  // Lägg till produkt till varukorgen
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
      
      // Uppdatera localStorage här efter att cart är uppdaterad
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      
      return updatedCart;
    });
  };

   // Ta bort produkt från varukorgen
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

   // Ändra antalet av en produkt
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

// En hook för att använda varukorgen i komponenter
export const useCart = () => {
  return useContext(CartContext);

};