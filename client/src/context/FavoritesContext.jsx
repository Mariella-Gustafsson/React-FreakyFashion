import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = sessionStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const addToFavorites = (product) => {
    setFavorites((favorites) => {
      const existingProduct = favorites.some((item) => item.id === product.id);
      if (existingProduct) return favorites;

      const updatedFavorites = [...favorites, { ...product }];      
      sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const removeFromFavorites = (product) => {
    setFavorites((favorites) => {
      const updatedFavorites = favorites.filter((item) => item.id !== product.id);
      sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    })
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(FavoritesContext);
};