export async function fetchProducts() {
  const response = await fetch("http://localhost:8000/api/products");
  return response.json();
}

export async function fetchProduct (url_slug) {
  const response = await fetch(`http://localhost:8000/api/products/${url_slug}`);
  return response.json();
}