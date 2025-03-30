import ToCart from "../component/Buttons/ToCart";
import CartDesktop from "../component/CartCheckout/CartDesktop";
import CartMobile from "../component/CartCheckout/CartMobile";
import { CartProvider } from "../context/CartContext";

function Cart() {
  return (
    <main>
      <CartProvider>
        <div className="sm:hidden">
          <CartMobile />
        </div>
        <div className="hidden sm:block">
          <CartDesktop />
        </div>
      </CartProvider>
      <ToCart />
    </main>
  )
}

export default Cart;