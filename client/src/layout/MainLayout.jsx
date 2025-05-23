import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

function MainLayout ({children}) {

  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default MainLayout;