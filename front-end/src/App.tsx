import { BrowserRouter, Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound/NotFound"
import Produtos from "./pages/Produtos/Produtos"

import Admin from "./pages/Admin"

import Categories from "./pages/Categories/Categories"
import ProductsManager from "./pages/Admin/pages/ProductsMananager"
import Covers from "./pages/Admin/pages/Covers"
import Category from "./pages/Admin/pages/Category"
import Config from "./pages/Admin/pages/Config"
import Orders from "./pages/Admin/pages/Orders"
import AppLayout from "./shared/components/AppLayout"
import { useFetchTheme } from "./shared/hooks/useFetchTheme"

function App() {
  useFetchTheme()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Produtos />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<ProductsManager />} />
          <Route path="covers" element={<Covers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="category" element={<Category />} />
          <Route path="config" element={<Config />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
