import { fetchProduct } from "../services/api";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ProductDetails from '../component/ProductDetails'

function ProductPage () {

  let params = useParams();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!params.url_slug) {
      console.log("Ingen URL-slug tillgänglig.");
      setLoading(false);
      return;
    }

    fetchProduct(params.url_slug)
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Produkten kunde inte laddas", err)
        setLoading(false);
      }
    )
  }, [params.url_slug]);

    // Om produkten fortfarande laddas, visa en laddningsindikator
    if (loading) {
      return <p>Laddar produkt...</p>;
    }
  
    // Om produkten inte finns, visa ett felmeddelande
    if (!product) {
      return <p>Produkten kunde inte hittas.</p>;
    }

  return (
    <ProductDetails product = {product} />
  )
}

export default ProductPage;