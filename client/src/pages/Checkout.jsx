import CartDesktop from "../component/CartCheckout/CartDesktop";
import CartMobile from "../component/CartCheckout/CartMobile";
import CheckoutForm from "../component/CartCheckout/CheckoutForm";
import { CartProvider } from "../context/CartContext";
import BuyButton from "../component/Buttons/BuyButton";
import { Helmet } from 'react-helmet';

function Checkout () {

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
      <CheckoutForm />
      <BuyButton />
    </main>
  )
};

export default Checkout;