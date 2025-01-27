import { MinusIcon, PlusIcon } from "lucide-react"
import { useCartContext } from "../../../contexts/CartContext"
import { Card } from "../../Card"

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

function CartItems() {
  const { cart, addCart, removeCart } = useCartContext()

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleAddCart = (item: CartItem) => {
    addCart(item)
  }
  const handleRemoveCart = (item: CartItem, id: number) => {
    removeCart(item, id)
  }

  return (
    <Card className="w-full p-4">
      {cart.map((item: CartItem) => (
        <section
          className="flex items-center gap-2 justify-between"
          key={`${item.id}`}
        >
          <div className="flex items-center gap-2">
            <img src={item.image} alt={item.name} className="w-16 h-16  " />
            <div className="flex flex-col">
              <h2 className="text-sm font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">R$ {item.price}</p>
              <p className="text-sm text-gray-500">
                Quantidade: {item.quantity}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <PlusIcon
              className="w-4 h-4 cursor-pointer"
              onClick={() => handleAddCart(item)}
            />
            <MinusIcon
              className="w-4 h-4 cursor-pointer"
              onClick={() => handleRemoveCart(item, item.id)}
            />
          </div>
        </section>
      ))}
      <footer className="flex justify-between items-center">
        <p className="text-sm font-semibold">Total: R$ {cartTotal}</p>
      </footer>
    </Card>
  )
}

export default CartItems
