import Categorys from "../components/Categorys"
import Header from "../components/Header"
import Offers from "../components/Offers"
import Product from "../components/Product"

function Home() {
  return (
    <>
      <Header />
      <Offers />

      <h2 className="text-center text-xl font-semibold mt-10 mb-3 text-text-light dark:text-text-dark ">
        Categorias
      </h2>

      <Categorys />
      <h2 className="text-xl font-semibold mt-10 text-text-light dark:text-text-dark">
        Produtos em Destaque
      </h2>

      <Product />
    </>
  )
}

export default Home
