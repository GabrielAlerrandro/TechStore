import { Heart, Moon, ShoppingCart, Sun, User } from "lucide-react"
import SearchBar from "./SearchBar"
import Logo from "./Logo"
import LinksPages from "./LinksPages"
import { useState } from "react"
import { useTheme } from "../hooks/useTheme"

function Header() {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false)
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex justify-between items-center mt-4 px-4 ">
      <div className="flex-1 flex justify-start">
        <Logo />
      </div>

      <div className="flex-1 flex justify-center ">
        <LinksPages />
      </div>

      <div className="flex-1 flex justify-end items-center gap-4">
        <SearchBar
          isSearchEnabled={isSearchEnabled}
          setIsSearchEnabled={setIsSearchEnabled}
        />
        <Heart className="cursor-pointer text-text-light dark:text-text-dark" />
        <ShoppingCart className="cursor-pointer text-text-light dark:text-text-dark" />
        <User className="cursor-pointer text-text-light dark:text-text-dark" />
        <button className="cursor-pointer text-text-light dark:text-text-dark">
          {theme === "light" ? (
            <Sun
              className="cursor-pointer text-text-light dark:text-text-dark"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <Moon
              className="cursor-pointer text-text-light dark:text-text-dark"
              onClick={() => setTheme("light")}
            />
          )}
        </button>
      </div>
    </div>
  )
}

export default Header
