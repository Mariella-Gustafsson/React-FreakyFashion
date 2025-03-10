export async function fetchProducts() {
  const response = await fetch("http://localhost:8000/api/products");
  console.log("det här är fetchproducts");
  return response.json();
}

export async function fetchProduct (url_slug) {
  const response = await fetch(`http://localhost:8000/api/products/${url_slug}`);
  console.log("Anropar fetchproduct funktionen");
  return response.json();
}