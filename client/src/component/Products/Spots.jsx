import { Link } from "react-router-dom";

function Spots () {

  return (
    <section className="flex flex-row gap-4 m-4">
      <Link 
        to="/"
        className="w-1/3 relative opacity-90">
        <img
          src="http://localhost:8000/images/SpotElegant.jpg"
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
          Elegant
        </h2>
      </Link>
      <Link 
        to="/"
        className="w-1/3 relative">
        <img
          class="opacity-90"
          src="http://localhost:8000/images/SpotCasual.jpg"
          alt="Modell klädd i casual stil"
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
          Casual
        </h2>
      </Link>
      <Link 
        to="/"
        className="w-1/3 relative">
        <img
          class="opacity-90"
          src="http://localhost:8000/images/SpotSporty.jpg"
          alt="Modell klädd  i sport stil"
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
          Sport
        </h2>
      </Link>
  </section>
  )
};

export default Spots;