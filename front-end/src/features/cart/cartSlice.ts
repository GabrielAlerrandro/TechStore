import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Product from "../../shared/components/Product"

interface CartState {
  items: Product[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (itemExists) {
        itemExists.quantity += 1
        return
      }

      state.items.push({ ...action.payload, quantity: 1 })
    },
    removeFromCart(state, action: PayloadAction<Product>) {
      const foundItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (foundItem && foundItem.quantity > 1) {
        foundItem.quantity -= 1
      } else {
        state.items = state.items.filter(
          (item: Product) => item.id !== action.payload.id
        )
      }
    },
    clearCart(state) {
      state.items = []
    },
  },
})
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
