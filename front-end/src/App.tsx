import { BrowserRouter, Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Categorias from "./pages/Categorias"
import Produtos from "./pages/Produtos"
import { CartProvider } from "./contexts/CartContext"
import Admin from "./admin/Admin"
import Covers from "./admin/pages/Covers"
import Orders from "./admin/pages/Orders"
import Category from "./admin/pages/Category"
import ProductsManager from "./admin/pages/ProductsMananager"
import Config from "./admin/pages/Config"



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products" element={<Produtos/>} />
          <Route path="/categories" element={<Categorias />} />
          <Route path="/admin" element={<Admin/>}>
            <Route index element={<ProductsManager />} />
            <Route path="covers" element={<Covers/>}/>
            <Route path="orders" element={<Orders/>}/>
            <Route path="category" element={<Category/>}/>
            <Route path="config" element={<Config/>}/>
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App