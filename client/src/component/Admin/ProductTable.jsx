import { useState, useEffect } from "react";
import { fetchProducts, removeProduct } from "../../services/api";
import { Link } from "react-router-dom";

function ProductTable () {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
      fetchProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
        console.log("Produkterna kunde inte laddas. Felmeddelande: " + err)
      });
    }, []);

    const deleteProduct = (id) => {
      removeProduct(id)
      .then(resp => {
        if (resp) {
          alert("Produkt borttaget");
          setProducts((prevProducts) => prevProducts.filter((item) => item.id !== id));
        } else  {
          alert("Produkt kunde inte tas bort");
        }
      })
    }
    
  return (
    <section className="p-7">
      <div className="flex place-content-between my-6">
				<h1 className="text-3xl font-bold">
					Produkter
				</h1>
					
				<button className="flex flex-row mr-16 gap-5 items-center border-1 border-black bg-[#5D2B7E] text-[#eb9fc5] font-bold p-3 rounded-lg shadow-md shadow-gray-700 hover:bg-[#eb9fc5] hover:text-[#5D2B7E]">
					<Link to={"/admin/products/new"}>
            Ny produkt
          </Link>
        </button>
			</div>

      { loading ?
      <p>Laddar produkter... </p>
      : <table className="min-w-full table-auto border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#eb9fc5] text-[#5D2B7E]">
              <th scope="col" className="py-2 px-4 text-left">Namn</th>
              <th scope="col" className="py-2 px-4 text-left">SKU</th>
              <th scope="col" className="py-2 px-4 text-left">Pris</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (    
            <tr key={product.id}>
              <td className="py-2 px-4">{product.name}</td>
              <td className="py-2 px-4">{product.SKU}</td>
              <td className="py-2 px-4">{product.price}</td>
              <td>
                <button
                  onClick={() => deleteProduct(product.id)}
                >
                  <i className="bi bi-trash text-lg text-[#5D2B7E] hover:text-[#eb9fc5]"></i>
                </button>
              </td>
            </tr>
            ) )}
          </tbody>
        </table>
      }
    </section>
  )
}

export default ProductTable;