import '../../App.css';
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

  console.log(product);
  
  return (
    <Link to={`/products/${product.url_slug}`}>
      <figure>
        <div className="relative">
          <img
            src={`http://localhost:8000/${product.picture_url}`}
            alt={`${product.name}`}
          />
          {product.showBadge ?
          <div className="badge justify-center absolute font-bold py-4 px-6 text-lg top-4 left-4 rounded-lg">
            Nyhet
          </div>
          : <span></span> }
          <i className="bi bi-heart text-4xl absolute bottom-4 right-4"></i>
        </div>
        <figcaption className="grid grid-cols-2 my-3 gap-2">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <span className="justify-self-end text-lg font-bold">{product.price} kr</span>
          <span className="col-span-2 text-sm">{product.brand}</span>
        </figcaption>
      </figure>
    </Link>

  )
}

export default ProductCard;