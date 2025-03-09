import { useEffect, useState } from "react";
import { fetchProducts } from "./api";
import ProductCard from "./ProductCard";

const ProductList = () => {

  const currentDate = new Date(); // dagens datum
  const sevenDaysMs = 7 * 24 * 60 * 60 * 1000; // 7 dagar i milisekunder, används för att jämföra datum
  const [products, setNewestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function checkPublishedDate (publishDates) {
    console.log(publishDates);
    let filterFutureProducts = publishDates.filter(product => {
      const productDate = new Date(product.publish_date);
      console.log(productDate);
      return productDate <= currentDate;
    });

    console.log(filterFutureProducts);
  
    filterFutureProducts = filterFutureProducts.sort((a,b) => new Date(b.publish_date) - new Date(a.publish_date));
    const newestProducts = filterFutureProducts.slice(0,8);
    
    return newestProducts.map(product => { // map metoden används här här att skapa en ny array
      const productDate = new Date(product.publish_date); //omvandlar datum till datumformat
      const showBadge = productDate >= (currentDate - sevenDaysMs);
      return { ...product,
        showBadge }; //returnerar en ny array av objekt med tillägget av showBadge
    })
  }

  console.log("dET GÄR ÄR produktlist");
  useEffect(() => {
    fetchProducts()
    .then(data => {
      console.log(data);
      const newestProducts = checkPublishedDate(data);
      console.log("Fetch products blocket");
      console.log(newestProducts);
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