export async function fetchProducts() {
  const response = await fetch("http://localhost:8000/api/products");
  console.log("det här är fetchproducts");
  console.log(response);
  return response.json();
}