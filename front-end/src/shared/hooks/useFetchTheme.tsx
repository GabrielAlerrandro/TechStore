import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useEffect } from "react"

export const useFetchTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme)

  useEffect(() => {
    const root = document.documentElement
    const removeOldTheme = theme === "dark" ? "light" : "dark"
    root.classList.remove(removeOldTheme)
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])
}
