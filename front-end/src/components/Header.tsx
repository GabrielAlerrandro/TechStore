import { Heart, Moon, ShoppingCart, Sun, User } from "lucide-react"
import SearchBar from "./SearchBar"
import Logo from "./Logo"
import LinksPages from "./LinksPages"
import { useState } from "react"
import { useTheme } from "../hooks/useTheme"
import { Cart } from "./Cart"
import { Card } from "./Card"
import { Button } from "./Button"

function Header() {
  const [isSearchEnabled, setIsSearchEnabled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleIsCartOpen = () => {
    setIsCartOpen(true)
  }

  return (
    <main className="flex justify-between items-center mt-4 px-4 ">
      <section className="flex-1 flex justify-start">
        <Logo />
      </section>

      <section className="flex-1 flex justify-center ">
        <LinksPages />
      </section>

      <section className="flex-1 flex justify-end items-center gap-4 relative">
        <SearchBar
          isSearchEnabled={isSearchEnabled}
          setIsSearchEnabled={setIsSearchEnabled}
        />

        <Heart className="cursor-pointer text-text-light dark:text-text-dark" />

        <ShoppingCart
          className="cursor-pointer text-text-light dark:text-text-dark"
          onMouseEnter={handleIsCartOpen}
        />
        {isCartOpen && (
          <Card className=" dark:bg-dark-background dark:text-text-dark transition-all duration-300 ease-in-out absolute top-full right-0 mt-2 w-80 max-h-80 overflow-y-auto bg-white shadow-lg rounded-md ">
            <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
          </Card>
        )}
        <User className="cursor-pointer text-text-light dark:text-text-dark" />
        <Button className="cursor-pointer text-text-light dark:text-text-dark">
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
        </Button>
      </section>
    </main>
  )
}

export default Header
