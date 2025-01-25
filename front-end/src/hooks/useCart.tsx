import { useEffect, useState } from "react"
import Product from "../components/Product"

export function useCart() {
  const [cart, setCart] = useState<Product[]>([])

  const getCartFromLocalStorage = (): Product[] => {
    try {
      const savedCart = localStorage.getItem("cart")
      if (!savedCart) return []
      return JSON.parse(savedCart)
    } catch (error) {
      throw new Error(`Error getting cart from localStorage: ${error}`)
    }
  }

  const saveCartToLocalStorage = (cart: Product[]) => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart))
    } catch (error) {
      throw new Error(`Error saving cart to localStorage: ${error}`)
    }
  }

  useEffect(() => {
    const savedCart = getCartFromLocalStorage()

    if (savedCart) {
      const updatedCart = savedCart.map((item: Product) => ({
        ...item,
        quantity: item.quantity || 1, // Garantir que todos os itens tenham uma quantidade
      }))
      setCart(updatedCart)
    }
  }, [])

  const addCart = (item: Product) => {
    let updatedCart: Product[]
    const itemExists = cart.find((cartItem: Product) => cartItem.id === item.id)
    if (itemExists) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }]
    }

    setCart(updatedCart)
    saveCartToLocalStorage(updatedCart)
    // localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const removeCart = (item: Product, id: number) => {
    let updatedCart: Product[]

    if (item.quantity > 1) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      setCart(updatedCart)
      localStorage.setItem("cart", JSON.stringify(updatedCart))
    } else {
      updatedCart = cart.filter((item: Product) => item.id != id)
      setCart(updatedCart)
      saveCartToLocalStorage(updatedCart)
    }
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
  }

  return {
    cart,
    addCart,
    removeCart,
    clearCart,
  }
}
