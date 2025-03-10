function NewProduct () {
  return (
    <>
    <header className="flex items-center h-16 bg-black text-3xl font-bold pl-4 admin-header">
			Administration
		</header>

		<div className="grid-administration">
			<aside className="p-4 text-2xl font-bold">
					Produkter
			</aside>

			<main>
				<section className="new-product-form m-10">
					<h1 className="text-2xl font-bold pb-4">
						Ny produkt
					</h1>

					<form className="flex flex-col w-2/3 gap-2">
						<label for="product_name">Namn</label>
						<input type="text" name="product_name" id="product_name" placeholder="Ange namn" maxlength="50" required class="w-1/2" />

						<label for="description">Beskrivning</label>
						<textarea name="description" id="description" cols="30" rows="6" placeholder="Ange beskrivning"></textarea>

						<label for="picture">Bild:</label>
						<input type="text" name="picture_url" id="picture" placeholder="Ange URL" required />

						<label for="brand">Märke</label>
						<input type="text" id="brand" name="brand" />

						<label for="SKU">SKU</label>
						<input type="text" id="SKU" name="SKU" placeholder="Ange SKU" pattern="[A-Z]{3}[0-9]{3}" class="w-1/4" required />
						
						<label for="price">Pris</label>
						<input type="number" id="price" name="price" class="w-1/4" />

						<label for="publish_date">Publiceringsdatum</label>
						<input type="date" id="publish_date" name="publish_date" class="w-1/2" />

						<button type="submit" className="flex flex-start items-center button-styles w-1/4 mt-6">
								Lägg till
						</button>
					</form>
				</section>
			</main>
		</div>
    </>
  )
}