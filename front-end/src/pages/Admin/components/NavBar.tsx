import { Play, Bell, ShoppingBag, Sun, Moon, Settings } from "lucide-react"
import { useTheme } from "../../../hooks/useTheme"
import { Link } from "react-router-dom"
import { NavBar } from "../../../components/Header/components"
import Logo from "../../../components/Logo"

export function Header() {
  const iconStyle =
    "cursor-pointer text-text-light dark:text-text-dark w-9 h-9 ml-4 transform transition duration-150 hover:scale-125"

  const { theme, setTheme } = useTheme()
  return (
    <NavBar.Root className="w-full mt-2">
      <NavBar.Content className="flex justify-between">
        <Logo />
        <NavBar.Content className="flex">
          <NavBar.Icon icon={Play} className={iconStyle} />

          <NavBar.Icon icon={Bell} className={iconStyle} />

          <NavBar.Icon icon={ShoppingBag} className={iconStyle} />

          {theme === "light" ? (
            <NavBar.Icon
              icon={Sun}
              onClick={() => setTheme("dark")}
              className={iconStyle}
            />
          ) : (
            <NavBar.Icon
              icon={Moon}
              onClick={() => setTheme("light")}
              className={iconStyle}
            />
          )}
        </NavBar.Content>

        <NavBar.Content className="flex">
          <Link to="/admin/config">
            <Settings className="text-text-light dark:text-text-dark w-9 h-9 mr-4 transform transition duration-150 hover:scale-125" />
          </Link>
        </NavBar.Content>
      </NavBar.Content>
    </NavBar.Root>
  )
}
