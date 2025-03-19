import './App.css'
import MainLayout from './layout/MainLayout';
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage'
import Cart from './pages/Cart'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/products/:url_slug" element={<MainLayout><ProductPage /></MainLayout>} />
      <Route path="/search" element={<MainLayout><SearchPage /></MainLayout>} />
      <Route path="/basket" element={<MainLayout><Cart /></MainLayout>} />
    </Routes>
  )
}

export default App
