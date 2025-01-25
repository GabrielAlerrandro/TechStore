import { X } from "lucide-react"
import { Card } from "./Card"
import CartItems from "./CartItems"
import { useCartContext } from "../contexts/CartContext"
import { Button } from "./Button"

interface cartProps {
  isCartOpen: boolean
  setIsCartOpen: (isCartOpen: boolean) => void
}

export function Cart({ isCartOpen, setIsCartOpen }: cartProps) {
  const { clearCart } = useCartContext()

  function handleClearCart() {
    clearCart()
  }

  {
    return (
      <Card className="w-full p-4 " onMouseLeave={() => setIsCartOpen(false)}>
        <header className="flex justify-between items-center ">
          <h2 className="text-xl font-semibold">Carrinho</h2>
          <Button
            className="cursor-pointer hover:text-red-600 transition-all duration-300 ease-in-out "
            onClick={() => setIsCartOpen(false)}
          >
            <X />
          </Button>
        </header>

        {isCartOpen && <CartItems />}

        <footer className="flex justify-between items-center ">
          <Button className="bg-primary-blue text-white px-4 py-2 rounded-md w-32 h-10 flex flex-row items-center justify-center ">
            Finalizar
          </Button>
          <Button
            className="bg-red-600 text-white px-4 py-2 rounded-md w-32 h-10"
            onClick={() => handleClearCart()}
          >
            Limpar
          </Button>
        </footer>
      </Card>
    )
  }
}
