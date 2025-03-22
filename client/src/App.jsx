import './App.css'
import MainLayout from './layout/MainLayout';
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import SearchPage from './pages/SearchPage'
import Cart from './pages/Cart'
import AdminLayout from './layout/AdminLayout';
import AdminList from './pages/AdminList'
import AdminNewProduct from './pages/AdminNewProduct';

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/products/:url_slug" element={<MainLayout><ProductPage /></MainLayout>} />
      <Route path="/search" element={<MainLayout><SearchPage /></MainLayout>} />
      <Route path="/basket" element={<MainLayout><Cart /></MainLayout>} />
      <Route path="/admin/products" element={<AdminLayout><AdminList /></AdminLayout>} />
      <Route path="/admin/products/new" element={<AdminLayout><AdminNewProduct /></AdminLayout>} />
      <Route path="/admin/products" element={<AdminLayout><AdminList /></AdminLayout>} />
    </Routes>
  )
}

export default App
