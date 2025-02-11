import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  getThemeFromLocalStorage,
  setThemeInLocalStorage,
} from "../../shared/utils/localStorageTheme"

interface ITheme {
  theme: "light" | "dark"
}

const initialState: ITheme = {
  theme: getThemeFromLocalStorage(),
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme(state, action: PayloadAction<ITheme>) {
      state.theme = action.payload.theme
      setThemeInLocalStorage(action.payload.theme)
    },
  },
})

export const { switchTheme } = themeSlice.actions
export default themeSlice.reducer
