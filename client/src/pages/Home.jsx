import Hero from '../component/Products/Hero'
import ProductList from '../component/Products/ProductList'
import Spots from '../component/Products/Spots';

function Home() {
  return (
    <>
      <Hero />
      <main>
        <div className="hidden lg:block">
          <Spots />
        </div>
        <ProductList />
      </main>
    </>
  )
}

export default Home;