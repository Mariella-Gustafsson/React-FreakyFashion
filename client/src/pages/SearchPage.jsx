import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../component/ProductCard";

function SearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('query'); 
  console.log(searchTerm);
  const splitSearchTerm = searchTerm.split(" ");
  console.log(splitSearchTerm);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function search (productList, searchTerm) {
    const searchResults = productList.filter(product =>
      searchTerm.every(term =>
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      product.brand.toLowerCase().includes(term.toLowerCase()) ||
      product.description.toLowerCase().includes(term.toLowerCase())
      )
    )

    console.log(searchResults);

    return searchResults;
  };

  useEffect(() => {
  
        if (searchTerm) {
        fetchProducts()
        .then(data => {
          const searchResults = search(data, splitSearchTerm);
          setSearchResults(searchResults);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
          console.log("Produkterna kunde inte laddas. Felmeddelande: " + err)
        });
      }
  }, [searchTerm]);

  return (
    <main>
      <section className="mx-4 my-5 sm:grid grid-cols-2 gap-4 lg:grid-cols-4">
      {
      searchResults.map((product => {
        return <ProductCard key={product.id} product = {product} />;
      }))
    }
      </section>
    </main>
  )
}

export default SearchPage;