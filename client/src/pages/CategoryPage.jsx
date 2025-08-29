import { useEffect, useState } from "react";
import { fetchCategoryProducts } from "../services/api";
import ProductCard from "../component/Products/ProductCard";
import { createRequestHandler, useParams } from "react-router-dom";

function CategoryPage() {

  let { category } = useParams();

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect (() => {
    fetchCategoryProducts(category)
    .then(data => {
      setCategoryProducts(data);
    })
    .catch(err => {
      setError(err);
      console.log("Produkterna kunde inte laddas. Felmeddelande: " + err)
    });
  }, [category]);

  console.log(categoryProducts);


  return (
    <main>
      <section className="flex flex-col m-5">
        <h1 className="text-3xl font-bold mb-5 text-center">{category}</h1>
        <div className="sm:grid grid-cols-2 gap-4 lg:grid-cols-4">
        {
          categoryProducts.map((product => {
          return <ProductCard key={product.id} product = {product} />
          }))
        }
        </div>
      </section>
    </main>
  )
}

export default CategoryPage;