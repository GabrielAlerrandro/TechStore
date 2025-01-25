import { BrowserRouter, Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Categorias from "./pages/Categorias"
import Produtos from "./pages/Produtos"
import Header from "./components/Header"
import { CartProvider } from "./contexts/CartContext"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products" element={<Produtos />} />
          <Route path="/categories" element={<Categorias />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
