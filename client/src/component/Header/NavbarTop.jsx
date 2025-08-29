import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../services/api";

const NavbarTop= () => {

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetchCategories()
    .then(data => {
      setCategories(data);
  })
    .catch(err => {
      setError(err);
      setLoading(false);
      console.log("Produkterna kunde inte laddas. Felmeddelande: " + err)
  })
  }, []);

  return (
    <ul className="flex justify-between font-bold text-lg text-[#5D2B7E] lg:items-center lg:gap-4">

      <li className="font-[Rowdies] text-lg">
        <Link to="#" className="hover:text-[#eb9fc5]">
          Nyheter
        </Link>
      </li>
      {
        categories.map((category => {
          return (
            <li key={category.id} className="font-[Rowdies] text-lg">
              <Link to="#" className="hover:text-[#eb9fc5]">
                {category.category_name}
              </Link>
            </li>
          )
        }))
      }
    </ul>
  );
};

export default NavbarTop;