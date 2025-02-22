import Categorys from "./componentes/Category"
// import Header from "../../shared/components/Header"
import Product from "../../shared/components/Product"
import Offers from "./componentes/Offers"

function Home() {
  return (
    <>
      {/* <Header /> */}
      <Offers />

      <h2 className="text-center text-xl font-semibold mt-10 mb-3 text-light dark:text-dark ">
        Categorias
      </h2>

      <Categorys />
      <h2 className="text-xl font-semibold mt-10 text-light dark:text-dark">
        Produtos em Destaque
      </h2>

      <Product />
    </>
  )
}

export default Home
