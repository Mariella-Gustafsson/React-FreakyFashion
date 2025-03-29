import { useCart } from "../../context/CartContext";

function CartDesktop () {

  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <section>

      { cart.length > 0 ?
      <table className="min-w-full table-auto border-separate border-spacing-0">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th scope="col" className="py-2 px-4 text-left">Produkt</th>
            <th scope="col" className="py-2 px-4 text-left">Antal</th>
            <th scope="col" className="py-2 px-4 text-left">Pris</th>
            <th scope="col" className="py-2 px-4 text-left">Totalt</th>
            <th scope="col" className="py-2 px-4 text-left"></th>
          </tr>
        </thead>
        <tbody>
          { cart.map((product) => (
          <tr key={product.id} className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">{product.name}</td>
            <td className="py-2 px-4">{product.quantity}</td>
            <td className="py-2 px-4">{product.price}</td>
            <td className="py-2 px-4">{product.price * product.quantity}</td>
            <td className="py-2 px-4">
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
              <button
                onClick={() => removeFromCart(product)}>
                <i className="bi bi-trash text-lg"></i>
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      : <p>Varukorgen är tom</p> }
    </section>
  );
}

export default CartDesktop;