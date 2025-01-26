import { Play, Bell, ShoppingBag, Sun, Moon, Settings } from "lucide-react"
import { useTheme } from "../../hooks/useTheme"
import { Button } from "../../components/Button"


function NavBar() {
    const { theme, setTheme } = useTheme();
    return (
        <nav className="w-full mt-2">
            <ul className="flex justify-between">
                <li>
                    <div>
                        <h1 className="text-2xl font-bold text-primary-blue ml-4">TechStore</h1>
                    </div>
                </li>
                <li>
                    <div className="flex">
                        <a href="#">
                            <Play className="text-text-light w-9 h-9 dark:text-text-dark transform transition duration-150 hover:scale-125"/>
                        </a>
                        <a href="#">
                            <Bell className="text-text-light w-9 h-9 ml-4 dark:text-text-dark transform transition duration-150 hover:scale-125"/>
                        </a>
                        <a href="#">
                            <ShoppingBag className="text-text-light w-9 h-9 ml-4 dark:text-text-dark transform transition duration-150 hover:scale-125"/>
                        </a>
                        <Button className="cursor-pointer text-text-light dark:text-text-dark">
                            {theme === "light" ? (
                                <Sun
                                    className="cursor-pointer text-text-light dark:text-text-dark w-9 h-9 ml-4 transform transition duration-150 hover:scale-125"
                                    onClick={() => setTheme("dark")}
                                />
                            ) : (
                                <Moon
                                    className="cursor-pointer text-text-light dark:text-text-dark w-9 h-9 ml-4 transform transition duration-150 hover:scale-125"
                                    onClick={() => setTheme("light")}
                                />
                            )}
                        </Button>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="#">
                            <Settings
                                className="text-text-light dark:text-text-dark w-9 h-9 mr-4 transform transition duration-150 hover:scale-125" 
                            />
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
