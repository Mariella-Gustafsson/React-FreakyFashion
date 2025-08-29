import '../../App.css';
import { Link } from "react-router-dom";
import { useWishlist } from '../../context/FavoritesContext';
import { useEffect, useState } from "react";

const ProductCard = ({product}) => {

  const { favorites, addToFavorites, removeFromFavorites } = useWishlist();
  const [existingWishlistItem, setExistingWishlistItem] = useState(false);

  useEffect(() => {
    const itemInWishlist = favorites.some(item => item.id === product.id);
    setExistingWishlistItem(itemInWishlist);
  }, [favorites]);
  
  const handleClick = (product) => {
      
    if (existingWishlistItem) {
      removeFromFavorites(product);
      console.log(favorites);
    } else {
      addToFavorites(product);
      console.log(favorites);
    }
  };

  return (
    <div className="relative">
    <Link to={`/products/${product.url_slug}`}>
      <figure>
        <div className="relative">
          <img
            className="opacity-75 hover:opacity-100"
            src={`http://localhost:8000/${product.picture_url}`}
            alt={`${product.name}`}
          />
          {product.showBadge ?
          <div className="badge justify-center absolute font-bold py-4 px-6 text-lg top-4 left-4 rounded-lg">
            Nyhet
          </div>
          : <span></span> }
        </div>
        <figcaption className="grid grid-cols-2 my-3 gap-2">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <span className="justify-self-end text-lg font-bold">{product.price} kr</span>
          <span className="col-span-2 text-sm">{product.brand}</span>
        </figcaption>
      </figure>
    </Link>
    <i 
      className={`${existingWishlistItem ? "bi bi-heart-fill" : "bi bi-heart"} text-4xl absolute bottom-30 right-4`}
      onClick={() => handleClick(product)}
    >
    </i>
  </div>

  )
}

export default ProductCard;