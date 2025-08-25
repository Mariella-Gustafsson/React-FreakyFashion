import { Helmet } from "react-helmet";

function Favorites() {

  return (
    <main>
      <Helmet>
        <title>Freaky Fashion</title>
      </Helmet>
      <section className="flex flex-col m-5">
        <h1 className="text-3xl font-bold mb-5 text-center">Mina favoriter</h1>
        <div className="sm:grid grid-cols-2 gap-4 lg:grid-cols-4">
          <p>Din önskelista är tom</p>
        </div>
      </section>
    </main>
  )
}

export default Favorites;