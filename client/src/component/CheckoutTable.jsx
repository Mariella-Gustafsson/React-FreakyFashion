function CheckoutTable () {
  return (
    <section className="flex flex-col items-center">
    <h1 className="text-4xl font-bold mt-3">Kassan</h1>

    <table className="border-2 border-black w-11/12 m-4 sm:hidden">
      <tr>
        <td className="p-2">
          1 x Svart T-Shirt
        </td>
        <td className="text-right p-2">
          199 SEK
        </td>
      </tr>
      <tr className="p-2">
          <td className="p-2 border-b-black price-row" colspan="2">
            199 SEK
          </td>
      </tr>
      <tr>
        <td className="p-2">
          2 x Vit T-Shirt
        </td>
        <td className="text-right p-2">
          398 SEK
        </td>
      </tr>
      <tr className="p-2">
        <td className="p-2 border-b-black price-row" colspan="2">
          199 SEK
        </td>
      </tr>
    </table>

    <table className="hidden sm:table table-styles">
      <thead className="table-header">
        <tr>
          <th scope="col">Produkt</th>
          <th scope="col">Antal</th>
          <th scope="col">Pris</th>
          <th scope="col">Totalt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Svart T-Shirt</td>
          <td>1</td>
          <td>199 kr</td>
          <td>199 kr</td>           
        </tr>
        <tr>
          <td>Vit T-Shirt</td>
          <td>2</td>
          <td>199 kr</td>
          <td>398 kr</td> 
        </tr>
      </tbody>
    </table>
  </section>

  )
}