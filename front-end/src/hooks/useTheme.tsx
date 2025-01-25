import { createContext, useContext, useEffect, useState } from "react"

interface ThemeContextInterface {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeFromLocalStorage = localStorage.getItem("theme")
  const [theme, setTheme] = useState(
    themeFromLocalStorage === "dark" ? "light" : "dark"
  )

  useEffect(() => {
    const root = document.documentElement
    const removeOldTheme = theme === "dark" ? "light" : "dark"
    root.classList.remove(removeOldTheme)
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
