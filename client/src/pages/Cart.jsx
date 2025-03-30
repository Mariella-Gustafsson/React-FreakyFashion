import ToCart from "../component/Buttons/ToCart";
import CartDesktop from "../component/CartCheckout/CartDesktop";
import CartMobile from "../component/CartCheckout/CartMobile";
import { CartProvider } from "../context/CartContext";
import { Helmet } from 'react-helmet';

function Cart() {
  return (
    <main>
      <Helmet>
        <title>Kassan</title>
      </Helmet>
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