function ProductDetails ({product}) {

  return (
    <article className="m-4 md:grid md:grid-cols-2">
    <img
      src={`http://localhost:8000/${product.picture_url}`}
      alt={`${product.name}`}
    />
    <div className="flex flex-col gap-3 mt-3 md:px-5">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <span className="text-sm">{product.brand}</span>
      <p>
        <span>{product.description}</span>
      </p>
      <span className="font-bold">{product.price} kr</span>

      <button
        type="button"
        className="button-styles flex items-center md:w-1/2"
      >
        Lägg i varukorg
      </button>
    </div>
  </article>
  )
}

export default ProductDetails;