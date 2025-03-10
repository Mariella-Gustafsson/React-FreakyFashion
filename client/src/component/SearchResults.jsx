function SearchResults () {

  return (
    <section>
        <h1 class="text-4xl font-bold text-center">Hittade 0 produkter</h1>
        <div class="mx-4 my-5 sm:grid grid-cols-2 gap-4 lg:grid-cols-4">
          <a href="/products/<%= product.url_slug %>">
            <figure>
              <div class="relative">
                <img
                  src="<%= product.picture_url%>"
                  alt="<%= product.product_name %>"
                />
                <span class="badge justify-center absolute font-bold p-2 text-lg top-4 left-4">
                  Nyhet
                </span>
                <i class="bi bi-heart-fill fav-heart text-4xl absolute bottom-4 right-4"></i>
              </div>
              <figcaption class="grid grid-cols-2 my-3 gap-2">
                <h2 class="text-lg font-bold">Name</h2>
                <span class="justify-self-end text-lg font-bold">Price kr</span>
                <span class="col-span-2 text-sm">Brand</span>
              </figcaption>
            </figure>
          </a>
        </div>
      </section>
  )
}