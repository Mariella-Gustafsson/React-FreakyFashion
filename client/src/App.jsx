import './App.css'
import Headerbar from './component/Headerbar'
import Logo from './component/Logo'
import NavbarTop from './component/NavbarTop'
import NavbarDesktop from './component/NavbarDesktop'
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <header>
        <nav>
          <div className="flex flex-col items-center">
            <div className="w-[90%] gap-4 mb-3 text-[#5D2B7E] sm:flex sm:flex-row sm:justify-between sm:w-[95%] sm:mb-0 lg:hidden">
              <div className="w-full h-[130px] sm:w-[30%] sm:h-[100px]">
                <Logo />
              </div>
              <Headerbar />
            </div>
            <div className="hidden bg-[#f9ecf3] w-full lg:block">
              <NavbarDesktop />
            </div>
            <div className="bg-[#e9acca] w-full p-3 lg:hidden">
              <NavbarTop />
            </div>
          </div>
          </nav>
        </header>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<ProductDetails />} />
      </Routes>
      </>
  )
}

export default App
