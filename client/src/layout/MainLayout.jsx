import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout ({children}) {

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default MainLayout;