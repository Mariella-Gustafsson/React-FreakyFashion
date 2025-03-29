import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";

function ProductDetails ({product}) {
  const { cart, addToCart, removeFromCart } = useCart();
  const [existingCartItem, setExistingCartItem] = useState(false);

  useEffect(() => {
    const itemInCart = cart.some(item => item.id === product.id);
    setExistingCartItem(itemInCart);
  }, [cart, product.id]);

  const handleClick = () => {

    if (existingCartItem) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <article className="m-4 md:grid md:grid-cols-2">
    <img
      src={`http://localhost:8000/${product.picture_url}`}
      alt={`${product.name}`}
    />
    <div className="flex flex-col gap-3 mt-3 md:px-5">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <span className="text-sm">{product.brand}</span>
      <p>
        <span>{product.description}</span>
      </p>
      <span className="font-bold">{product.price} kr</span>

      <button
        type="button"
        className="border-1 border-black p-4 bg-[#5D2B7E] text-[#e9acca] font-bold shadow-md shadow-black w-[70%]"
        onClick={handleClick}
      >
        { existingCartItem ? "Ta bort från varukorg" : "Lägg i varukorg" }
      </button>
    </div>
  </article>
  )
}

export default ProductDetails;