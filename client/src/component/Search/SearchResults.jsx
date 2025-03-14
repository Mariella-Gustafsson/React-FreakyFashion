import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import ProductCard from "../ProductCard";

function SearchResults ({searchTerm}) {

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function search (productList, searchTerm) {
    const searchResults = productList.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return searchResults;
  };

    useEffect(() => {

      if (searchTerm) {
      fetchProducts()
      .then(data => {
        const searchResults = search(data, searchTerm);
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
    <section>
      {searchResults.length > 0 ? 
      searchResults.map(product =>
        <ProductCard key={product.id} product={product} />
      ) : <p>Inga produkter matchar söktermen.</p>
      }
    </section>
  )
}

export default SearchResults;