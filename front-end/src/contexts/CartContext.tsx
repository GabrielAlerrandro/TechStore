import { createContext, useContext } from "react"
import Product from "../components/Product"
import { useCart } from "../hooks/useCart"

interface CartContextInterface {
  cart: Product[]
  addCart: (item: Product) => void
  removeCart: (item: Product, id: number) => void
  clearCart: () => void
}

interface CartProviderProps {
  children: React.ReactNode
}

const CartContext = createContext<CartContextInterface | undefined>(undefined)

export function CartProvider({ children }: CartProviderProps) {
  const { cart, addCart, removeCart, clearCart } = useCart()

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context)
    throw new Error("useCartContext must be used within a CartProvider")
  return context
}
