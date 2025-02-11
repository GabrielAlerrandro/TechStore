import { Card } from "../Card"
import { Button } from "../Button"
import { ShoppingCart } from "lucide-react"
import { useModal } from "../../hooks/useModal"
import { ModalRoot } from "../Modal/ModalRoot"
import { ModalTitle } from "../Modal/ModalTitle"
import { ModalContent } from "../Modal/ModalContent"
import { ModalFooter } from "../Modal/ModalFooter"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../redux/store"
import { addToCart } from "../../../features/cart/cartSlice"

const MockProductItems = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://placehold.co/600x400",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus minus possimus distinctio, voluptatum non quae, odio adipisci error impedit nisi assumenda nostrum dolore nihil est fuga facere quasi dolorum.",
    quantity: 1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "https://placehold.co/600x400",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus minus possimus distinctio, voluptatum non quae, odio adipisci error impedit nisi assumenda nostrum dolore nihil est fuga facere quasi dolorum.",
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://placehold.co/600x400",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus minus possimus distinctio, voluptatum non quae, odio adipisci error impedit nisi assumenda nostrum dolore nihil est fuga facere quasi dolorum.",
    quantity: 1,
  },
]

interface Product {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  description: string
}

function Product() {
  const { isOpen, openModal, closeModal } = useModal()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const dispatch: AppDispatch = useDispatch()

  const handleOpenModal = (item: Product) => {
    setSelectedProduct(item)
    openModal()
  }

  const handleAddToCart = (item: Product) => {
    dispatch(addToCart(item))
    closeModal()
  }

  return (
    <div className="flex flex-wrap justify-start gap-4 m-2  ">
      {MockProductItems.map((item) => {
        const formattedPrice = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(parseFloat(item.price.toFixed(2)))

        return (
          <Card
            key={item.id}
            className=" w-72 cursor-pointer dark:text-text-dark  dark:border-dark-border dark:bg-dark-background border-2 border-gray-300 rounded-md p-3 shadow-xl dark:shadow-dark-border transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-2xl "
            onClick={() => handleOpenModal(item)}
          >
            <img src={item.image} alt={item.name} className="w-full h-auto" />
            <h2 className="text-lg font-bold mt-2 ">{item.name}</h2>
            <p className=" line-clamp-2 text-sm">{item.description}</p>
            <p className="text-lg font-semibold mt-2 leading-tight">{`${formattedPrice}`}</p>
            <Button
              className=" text-lg mt-2 px-4 py-2 rounded-md w-full flex items-center gap-2 justify-center "
              type="primary"
              onClick={() => handleAddToCart(item)}
            >
              <ShoppingCart size={20} />
              Adicionar ao carrinho
            </Button>
          </Card>
        )
      })}

      {isOpen && selectedProduct && (
        <ModalRoot>
          <ModalTitle onClose={closeModal}>{selectedProduct.name}</ModalTitle>
          <ModalContent>
            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-auto mb-4"
              />
              <p>{selectedProduct.description}</p>
              <p className="text-lg font-semibold mt-4">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(selectedProduct.price)}
              </p>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button
              type="primary"
              onClick={() => handleAddToCart(selectedProduct)}
              className="text-lg mt-2 px-4 py-2 rounded-md w-full flex items-center gap-2 justify-center"
            >
              Adicionar ao carrinho
            </Button>
          </ModalFooter>
        </ModalRoot>
      )}
    </div>
  )
}

export default Product
