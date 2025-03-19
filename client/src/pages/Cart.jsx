import CartDesktop from "../component/CartDesktop";
import { CartProvider } from "../context/CartContext";

function Cart() {
  return (
    <main>
      <CartProvider>
        <CartDesktop />
      </CartProvider>
    </main>
  )
}

export default Cart;