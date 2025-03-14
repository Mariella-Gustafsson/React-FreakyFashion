import { useState } from "react";
import SearchResults from "./SearchResults";

function SearchField () {

  const [searchTerm, setSerchTerm] = useState(null);

  const handleSearchInput = (e) => {
    setSerchTerm(e.target.value);
  }

  return (
    <>
      <form className="flex items-center flex-grow border rounded-xl" >
          <input type="search" name="search"  placeholder="Sök produkt" value={searchTerm} onChange={handleSearchInput} className="pl-10 py-1 text-md lg:w-[70%]" />
          <i className="bi bi-search absolute text-xl top-1 left-3 sm:top-9 text-[#5D2B7E] lg:top-5"></i> 
      </form>
      <SearchResults searchTerm={searchTerm} />
    </>
  )
};

export default SearchField;