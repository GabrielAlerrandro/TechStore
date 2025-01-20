import { BrowserRouter, Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Categorias from "./pages/Categorias"
import Produtos from "./pages/Produtos"
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<Produtos />} />
        <Route path="/categories" element={<Categorias />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
