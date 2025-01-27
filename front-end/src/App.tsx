import { BrowserRouter, Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Produtos from "./pages/Produtos"
import { CartProvider } from "./contexts/CartContext"

import Admin from "./pages/Admin"

import Categories from "./pages/Categories"
import ProductsManager from "./pages/Admin/pages/ProductsMananager"
import Covers from "./pages/Admin/pages/Covers"
import Category from "./pages/Admin/pages/Category"
import Config from "./pages/Admin/pages/Config"
import Orders from "./pages/Admin/pages/Orders"
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products" element={<Produtos />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/admin" element={<Admin />}>
            <Route index element={<ProductsManager />} />
            <Route path="covers" element={<Covers />} />
            <Route path="orders" element={<Orders />} />
            <Route path="category" element={<Category />} />
            <Route path="config" element={<Config />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
