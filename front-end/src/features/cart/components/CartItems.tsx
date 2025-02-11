import { MinusIcon, PlusIcon } from "lucide-react"
import { Card } from "../../../shared/components/Card"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../redux/store"
import { addToCart, removeFromCart } from "../cartSlice"
import Product from "../../../shared/components/Product"

function CartItems() {
  const dispatch: AppDispatch = useDispatch()

  const CartItems = useSelector((state: RootState) => state.cart.items)

  const cartTotal = CartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleAddCart = (item: Product) => {
    dispatch(addToCart(item))
  }
  const handleRemoveCart = (item: Product) => {
    dispatch(removeFromCart(item))
  }

  return (
    <Card className="w-full p-4">
      {CartItems.map((item: Product) => (
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
              onClick={() => handleRemoveCart(item)}
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
