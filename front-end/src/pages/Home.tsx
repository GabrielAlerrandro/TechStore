import Categorys from "../components/Categorys"
import Offers from "../components/Offers"

function Home() {
  return (
    <>
      <Offers />

      <h2 className="text-center text-xl font-semibold mt-10 mb-3 text-text-light dark:text-text-dark ">
        Categorias
      </h2>

      <Categorys />
      <h2 className="text-xl font-semibold mt-10 text-text-light dark:text-text-dark">
        Produtos em Destaque
      </h2>
    </>
  )
}

export default Home
