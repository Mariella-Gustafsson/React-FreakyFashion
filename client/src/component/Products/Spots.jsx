import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../services/api";
import { useState } from "react";

function Spots () {

  const [spots, setSpots] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories()
    .then(data => {
      const categories = data;
      const randomSpots = categories.sort(() => 0.5 - Math.random());
      setSpots(randomSpots.slice(0, 3));
    })
    .catch(err => {
      setError(err);
      setLoading(false);
      console.log("Produkterna kunde inte laddas. Felmeddelande: " + err)
    })}, []);

  return (
    <section className="flex flex-row gap-4 m-4">
      {
        spots.map((spot => (
          <Link 
            to={`/categories/${spot.category_name}`}
            className="w-1/3 relative opacity-90">
            <img
              src={`http://localhost:8000/${spot.category_picture}`}
              alt="Modell klädd i elegant stil"
            />
            <h2 className={`
              absolute
              text-center
              text-6xl
              font-bold
             text-[#edd1ff]
              top-[50%]
              left-[50%]
              -translate-x-1/2
              -translate-y-1/2
              transform
              text-shadow
              uppercase
              font-[Rowdies]
              `}>
              {spot.category_name}
            </h2>
          </Link>
        )))
      }
    </section>
  )
};

export default Spots;