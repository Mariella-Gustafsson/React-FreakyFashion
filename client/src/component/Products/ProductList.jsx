import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import ProductCard from "./ProductCard";

const ProductList = () => {

  const currentDate = new Date(); // dagens datum
  const currentDateMs = currentDate.getTime();
  const sevenDaysMs = 7 * 24 * 60 * 60 * 1000; // 7 dagar i milisekunder, används för att jämföra datum
  const [products, setNewestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function checkPublishedDate (publishDates) {
    let filterFutureProducts = publishDates.filter(product => {
      const productDate = new Date(product.publish_date);
      const productDateMs = productDate.getTime();
      return productDateMs <= currentDateMs;
    });
  
    filterFutureProducts = filterFutureProducts.sort((a,b) => new Date(b.publish_date) - new Date(a.publish_date));
    const newestProducts = filterFutureProducts.slice(0,8);
    
    return newestProducts.map(product => { // map metoden används här här att skapa en ny array
      const productDate = new Date(product.publish_date); //omvandlar datum till datumformat
      const productDateMs = productDate.getTime();
      const showBadge = productDateMs >= (currentDateMs - sevenDaysMs);
      return { ...product,
        showBadge }; //returnerar en ny array av objekt med tillägget av showBadge
    })
  }
  
  useEffect(() => {
    fetchProducts()
    .then(data => {
      const newestProducts = checkPublishedDate(data);
      setNewestProducts(newestProducts);
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
      console.log("Produkterna kunde inte laddas. Felmeddelande: " + err)
    });
  }, []); // Tom beroende-array betyder att det bara körs en gång vid första render

  return (
    <section className="mx-4 my-5 sm:grid grid-cols-2 gap-4 lg:grid-cols-4">
      {
      products.map((product => {
        return <ProductCard key={product.id} product = {product} />;
      }))
    }
    </section>
  );
};

export default ProductList;