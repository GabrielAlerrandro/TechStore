import { combineReducers } from "redux"
import cartReducer from "../features/cart/cartSlice"
import themeReducer from "../features/theme/themeSlice"

const rootReducer = combineReducers({
  //   user: userReducer,
  cart: cartReducer,
  theme: themeReducer,
})

export default rootReducer
