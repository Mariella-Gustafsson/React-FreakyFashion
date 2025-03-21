import { useState } from 'react';
import { Link } from 'react-router-dom';

function Carousel ({products}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // Funktion för att gå till nästa bild
  const nextImage = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 3;
      return nextIndex < products.length ? 
            nextIndex 
            : 0;
    });

    setCurrentPage((prevPage) => 
      (prevPage + 1) % Math.ceil((products.length) / 3));
  };

  // Funktion för att gå till föregående bild
  const prevImage = () => {
    setCurrentIndex((prevIndex) => {
      const previousIndex = prevIndex - 3;
      return prevIndex === 0 ? 
            (products.length - 1) 
            : previousIndex;
  });

  setCurrentPage((prevPage) => {
    return prevPage === 0 ? 
          (Math.ceil((products.length) / 3) - 1) 
          : (prevPage- 1) % Math.ceil((products.length) / 3);
  });}

  return (
    <>
      <div className="relative max-w-[85%] mx-auto max-h-[400px] flex my-10">
        <div className="w-full flex justify-between gap-4">
          <div className="grow">
            <Link to={`/products/${products[currentIndex].url_slug}`}>
              <img
                src={`http://localhost:8000${products[currentIndex].picture_url}`}
                alt={`carousel ${currentIndex}`}
                className="w-full object-cover rounded-lg h-full opacity-70 hover:opacity-100 shrink grow"
              />
            </Link>
          </div>

          {products[currentIndex + 1] ?
          <div className="grow">
            <Link to={`/products/${products[currentIndex + 1].url_slug}`}>
              <img
                src={`http://localhost:8000${products[currentIndex + 1].picture_url}`}
                alt={`carousel ${currentIndex + 1}`}
                className="w-full object-cover rounded-lg h-full opacity-70 hover:opacity-100 shrink"
              />
            </Link>
          </div>
          : <div></div>}

          {products[currentIndex + 2] ?
          <div className="grow">
            <Link to={`/products/${products[currentIndex + 2].url_slug}`}>
              <img
                src={`http://localhost:8000${products[currentIndex + 2].picture_url}`}
                alt={`carousel ${currentIndex + 2}`}
                className="w-full object-cover rounded-lg h-full opacity-70 hover:opacity-100 shrink"
              />
            </Link>
          </div>
          : <div></div>}
        </div>

        {/* Föregående knapp */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-[#5D2B7E] text-white py-4 px-6 rounded-full hover:bg-gray-700"
        >
          &#10094;
        </button>

        {/* Nästa knapp */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-[#5D2B7E] text-white py-4 px-6 rounded-full hover:bg-gray-700"
        >
          &#10095;
        </button>

        {/* Indikatorer (punkter) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: Math.ceil((products.length) / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentPage ? 'bg-[#eb9fc5]' : 'bg-gray-500'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </>
  )
};

export default Carousel;