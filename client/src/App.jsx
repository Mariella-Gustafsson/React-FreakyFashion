import './App.css'
import Headerbar from './component/Headerbar'
import Logo from './component/Logo'
import NavbarTop from './component/NavbarTop'
import Hero from './component/Hero'

function App() {

  return (
    <>
      <header>
        <nav>
          <div className="flex flex-col items-center">
            <div className="w-[90%] gap-4 mb-3 text-[#5D2B7E] sm:flex sm:flex-row sm:justify-between sm:w-[95%] sm:mb-0">
              <div className="w-full h-[130px] sm:w-[30%] sm:h-[100px]">
                <Logo />
              </div>
              <Headerbar />
            </div>
            <div className="bg-[#e9acca] w-full p-3">
              <NavbarTop />
            </div>
          </div>
          <Hero />
        </nav>
      </header>
    </>
  )
}

export default App
