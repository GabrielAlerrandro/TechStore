import { Play, Bell, ShoppingBag, Sun, Moon, Settings } from "lucide-react"
import { Link } from "react-router-dom"
import { NavBar } from "../../../shared/components/Header/components"
import Logo from "../../../shared/components/Logo"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { switchTheme } from "../../../features/theme/themeSlice"

export function Header() {
  const iconStyle =
    "cursor-pointer text-light dark:text-dark w-9 h-9 ml-4 transform transition duration-150 hover:scale-125"

  const theme = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch()

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    dispatch(switchTheme({ theme: newTheme }))
  }

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
              onClick={() => handleTheme()}
              className={iconStyle}
            />
          ) : (
            <NavBar.Icon
              icon={Moon}
              onClick={() => handleTheme()}
              className={iconStyle}
            />
          )}
        </NavBar.Content>

        <NavBar.Content className="flex">
          <Link to="/admin/config">
            <Settings className="text-light dark:text-dark w-9 h-9 mr-4 transform transition duration-150 hover:scale-125" />
          </Link>
        </NavBar.Content>
      </NavBar.Content>
    </NavBar.Root>
  )
}
