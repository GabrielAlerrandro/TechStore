import { Card } from "../Card"
import { useCartContext } from "../../contexts/CartContext"
import { Button } from "../Button"
const MockProductItems = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://placehold.co/600x400",
    quantity: 1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "https://placehold.co/600x400",
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://placehold.co/600x400",
    quantity: 1,
  },
]

interface Product {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

function Product() {
  const { addCart } = useCartContext()

  const handleAddToCart = (item: Product) => {
    addCart(item)
  }

  return MockProductItems.map((item) => (
    <Card
      key={item.id}
      className="w-full h-full  dark:text-text-dark dark:border-dark-border dark:bg-dark-background border-2 border-gray-300 rounded-md p-2 "
    >
      <img src={item.image} alt={item.name} className="w-36 h-24" />
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      <Button
        className=" px-4 py-2 rounded-md"
        type="primary"
        onClick={() => handleAddToCart(item)}
      >
        Adicionar ao carrinho
      </Button>
    </Card>
  ))
}

export default Product
