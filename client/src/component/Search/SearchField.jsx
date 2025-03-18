import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SearchField() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchInput = (event) => {
    const input = event.target.value;
    setSearchTerm(input);

    if (input.trim()) {
      const encodedSearchTerm = encodeURIComponent(input.trim());
      navigate(`/search?query=${encodedSearchTerm}`);
    } else {
      navigate("/");
    }
  }

  return (
    <>
      <form className="flex items-center flex-grow border rounded-xl">
        <input
          type="search"
          name="search"
          placeholder="Sök produkt"
          value={searchTerm}
          onChange={handleSearchInput} 
          className="pl-10 py-1 text-md lg:w-[100%]"
        />
        <i className="bi bi-search absolute text-xl top-1 left-3 sm:top-9 text-[#5D2B7E] lg:top-5"></i> 
      </form>
    </>
  )
};

export default SearchField;
