import { X } from "lucide-react"
import { Card } from "../../shared/components/Card"
import CartItems from "./components/CartItems"
import { Button } from "../../shared/components/Button"
import { clearCart } from "./cartSlice"
import { useDispatch } from "react-redux"

interface cartProps {
  isCartOpen: boolean
  setIsCartOpen: (isCartOpen: boolean) => void
}

export function Cart({ isCartOpen, setIsCartOpen }: cartProps) {
  const dispatch = useDispatch()

  function handleClearCart() {
    dispatch(clearCart())
  }

  {
    return (
      <Card className="w-full p-4 " onMouseLeave={() => setIsCartOpen(false)}>
        <header className="flex justify-between items-center ">
          <h2 className="text-xl font-semibold">Carrinho</h2>
          <Button
            className="hover:text-red-600 transition-all duration-300 ease-in-out  "
            onClick={() => setIsCartOpen(false)}
            type="transparent"
          >
            <X />
          </Button>
        </header>

        {isCartOpen && <CartItems />}

        <footer className="flex justify-between items-center ">
          <Button
            className=" px-4 py-2 rounded-md w-32 h-10 flex flex-row items-center justify-center "
            type="primary"
          >
            Finalizar
          </Button>
          <Button
            className=" px-4 py-2 rounded-md w-32 h-10"
            type="cancel"
            onClick={() => handleClearCart()}
          >
            Limpar
          </Button>
        </footer>
      </Card>
    )
  }
}
