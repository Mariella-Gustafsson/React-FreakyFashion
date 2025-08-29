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
import { FavoritesProvider } from './context/FavoritesContext';

function App() {

  return (
    <Routes>
      <Route element={
        <FavoritesProvider>
          <MainLayout />
        </FavoritesProvider>
        }
      >
        {/* Användarroutes med layout */}
        <Route path="/" element={<Home />} />
        <Route path="/products/:url_slug" element={<ProductPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/basket" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/categories/:category_name" element={<CategoryPage />} />
        <Route path="/news" element={<Nyheter />} />
        <Route path="/order/confirmation/:order_id" element={<OrderConfirmation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>


      <Route element={<AdminLayout />}>
        {/* Adminroutes med layout */}
        <Route path="/denied" element={<Denied />} />
        <Route path="/admin/products" element={<AdminList />} />
        <Route path="/admin/products/new" element={<AdminNewProduct />} />
        <Route path="/admin/categories" element={<AdminCategories />} />
        <Route path="/admin/categories/new" element={<AdminNewCategory />} />
      </Route>
    </Routes>
  )
}

export default App
