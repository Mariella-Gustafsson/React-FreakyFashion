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
import Checkout from './pages/Checkout';
import Favorites from './pages/Favorites';
import CategoryPage from './pages/CategoryPage';
import Nyheter from './pages/Nyheter';
import OrderConfirmation from './pages/OrderConfirmation';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminCategories from './pages/AdminCategories';
import AdminNewCategory from './pages/AdminNewCategory';
import Denied from './pages/Denied';

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/products/:url_slug" element={<MainLayout><ProductPage /></MainLayout>} />
      <Route path="/search" element={<MainLayout><SearchPage /></MainLayout>} />
      <Route path="/basket" element={<MainLayout><Cart /></MainLayout>} />
      <Route path="/checkout" element={<MainLayout><Checkout /></MainLayout>} />
      <Route path="/favorites" element={<MainLayout><Favorites /></MainLayout>} />
      <Route path="/categories/:category_name" element={<MainLayout><CategoryPage /></MainLayout>} />
      <Route path="/news" element={<MainLayout><Nyheter /></MainLayout>} />
      <Route path="/order/confirmation/:order_id" element={<MainLayout><OrderConfirmation /></MainLayout>} />
      <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
      <Route path="/denied" element={<AdminLayout><Denied /></AdminLayout>} />
      <Route path="/register" element={<MainLayout><Register /></MainLayout>} />
      <Route path="/admin/products" element={<AdminLayout><AdminList /></AdminLayout>} />
      <Route path="/admin/products/new" element={<AdminLayout><AdminNewProduct /></AdminLayout>} />
      <Route path="/admin/categories" element={<AdminLayout><AdminCategories /></AdminLayout>} />
      <Route path="/admin/categories/new" element={<AdminLayout><AdminNewCategory /></AdminLayout>} />
    </Routes>
  )
}

export default App
