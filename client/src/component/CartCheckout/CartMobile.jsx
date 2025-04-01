import React from 'react';
import { useCart } from "../../context/CartContext";

function CartMobile() {

  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <section className="">
    {cart.length > 0 ? (
      cart.map((product) => (
        <div key={product.id} className="grid grid-cols-2 border-b-2 p-4">
          <span>{product.quantity} x {product.name}</span>
          <span className="text-right">{product.price} SEK</span>
          <span>{product.quantity * product.price} SEK</span>
          <div className="justify-self-end">
            <select
              id={product.id}
              value={product.quantity}
              onChange={(e) => updateQuantity(product.id, parseInt(e.target.value, 10))}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
            >
              {[1, 2, 3, 4, 5].map((quantity) => (
                <option key={quantity} value={quantity}>
                  {quantity}
                </option>
              ))}
            </select>
            <button onClick={() => removeFromCart(product)}>
              <i className="bi bi-trash text-lg"></i>
            </button>
          </div>
        </div>
      ))
    ) : (
      <p className="p-4">Varukorgen är tom</p>
    )}
    </section>
  );
}

export default CartMobile;