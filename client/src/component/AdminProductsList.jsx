function AdminProductsList () {

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
				<div className="flex place-content-between mt-10">
					<h1 className="ml-8 text-2xl font-bold">
						Produkter
					</h1>
					
					<div className="flex flex-row mr-16 gap-5">
						<button className="load-products-btn button-styles flex items-center">
							Ladda produkter
						</button>
						<a href="/admin/products/new" className="button-styles flex items-center">
							Ny produkt
						</a>
					</div>
				</div>

				<table className="table-styles">
					<thead className="table-header">
						<tr className="table-titles">
							<th scope="col" className="font-bold">Namn</th>
							<th scope="col">SKU</th>
							<th scope="col">Pris</th>
						</tr>
					</thead>
					<tbody>
						<tr className="empty-row">
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</main>
		</div>
    </>
  )
}