import Hero from '../component/Products/Hero'
import ProductList from '../component/Products/ProductList'
import Spots from '../component/Products/Spots';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <title>Freaky Fashion</title>
      </Helmet>
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