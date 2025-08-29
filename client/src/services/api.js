export async function fetchProducts() {
  const response = await fetch("http://localhost:8000/api/products");
  return response.json();
}

export async function fetchProduct (url_slug) {
  const response = await fetch(`http://localhost:8000/api/products/${url_slug}`);
  return response.json();
}

export async function removeProduct (id) {
  const response = await fetch(`http://localhost:8000/api/products/${id}`, {
    method: "DELETE"
  });
  return response.ok;
}

export async function fetchCategories() {
  const response = await fetch("http://localhost:8000/api/categories");
  return response.json();
}

export async function fetchCategoryProducts(category) {
  const response = await fetch(`http://localhost:8000/api/categories/${category}`);
  return response.json();
}