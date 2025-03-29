import { fetchProduct, fetchProducts } from "../services/api";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ProductDetails from '../component/Products/ProductDetails'
import { CartProvider } from "../context/CartContext";
import Carousel from "../component/Products/Carousel";

function ProductPage () {

  let params = useParams();
  
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingProduct, setLoadingProduct] = useState(true);

  useEffect(() => {

    if (!params.url_slug) {
      console.log("Ingen URL-slug tillgänglig.");
      setLoading(false);
      return;
    }

    fetchProduct(params.url_slug)
      .then(data => {
        setProduct(data);
      })
      .catch(err => {
        console.log("Produkten kunde inte laddas", err)
      })
      .finally(() => setLoadingProduct(false));
  }, [params.url_slug]);

  useEffect(() => {
    fetchProducts()
    .then(data => {
      console.log("fetch");
      setProducts(data);
    })
    .catch(err => {
      setError(err);
      console.log("Produkterna kunde inte laddas. Felmeddelande: " + err)
    })
    .finally(() => setLoadingProducts(false)); 
  }, []);


    // Om produkten fortfarande laddas, visa en laddningsindikator
    if (loadingProducts || loadingProduct) {
      return <p>Laddar produkt...</p>;
    }
  
    // Om produkten inte finns, visa ett felmeddelande
    if (!product) {
      return <p>Produkten kunde inte hittas.</p>;
    }

  return (
    <>
      <CartProvider>
        <ProductDetails product = {product} />
      </CartProvider>
      <div className="hidden sm:block">
        <Carousel products = {products} />
      </div>
    </>
  )
}

export default ProductPage;