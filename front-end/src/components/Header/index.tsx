import { Heart, Moon, ShoppingCart, Sun, User } from "lucide-react"
import SearchBar from "../SearchBar"
import Logo from "../Logo"
import LinksPages from "../LinksPage"
import { useState } from "react"
import { useTheme } from "../../hooks/useTheme"
import { Cart } from "../Cart"
import { Card } from "../Card"
import { NavBar } from "./components"

function Header() {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleIsCartOpen = () => {
    setIsCartOpen(true)
  }

  return (
    <NavBar.Root className="flex justify-between items-center mt-4 px-4 ">
      <NavBar.Content className="flex-1 flex justify-start">
        <Logo />
      </NavBar.Content>

      <NavBar.Content className="flex-1 flex justify-center ">
        <LinksPages />
      </NavBar.Content>

      <NavBar.Content className="flex-1 flex justify-end items-center gap-4 relative">
        <SearchBar
          isSearchEnabled={isSearchEnabled}
          setIsSearchEnabled={setIsSearchEnabled}
        />

        <NavBar.Icon icon={Heart} />

        <NavBar.Icon icon={ShoppingCart} onMouseEnter={handleIsCartOpen} />

        {isCartOpen && (
          <Card className="dark:bg-dark-background dark:text-text-dark transition-all duration-300 ease-in-out absolute top-full right-0 mt-2 w-80 max-h-80 overflow-y-auto bg-white shadow-lg rounded-md ">
            <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
          </Card>
        )}

        <NavBar.Icon icon={User} />

        {theme === "light" ? (
          <NavBar.Icon icon={Moon} onClick={() => setTheme("dark")} />
        ) : (
          <NavBar.Icon icon={Sun} onClick={() => setTheme("light")} />
        )}
      </NavBar.Content>
    </NavBar.Root>
  )
}

export default Header
