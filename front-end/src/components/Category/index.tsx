import { Gamepad2, Keyboard, Monitor, Mouse, PcCase } from "lucide-react"
import { Card } from "../Card"

const categories = [
  {
    name: "monitor",
    icon: Monitor,
  },
  {
    name: "computador",
    icon: PcCase,
  },
  {
    name: "teclado",
    icon: Keyboard,
  },
  {
    name: "mouse",
    icon: Mouse,
  },
  {
    name: "controle",
    icon: Gamepad2,
  },
]

function Categorys() {
  return (
    <div className="flex flex-wrap justify-center items-center mt-2 flex-row gap-3">
      {categories.map((category) => (
        <div className="group cursor-auto" key={category.name}>
          <Card className="flex flex-col justify-center items-center border-2 border-gray-300 rounded-md w-28 h-28 dark:text-text-dark dark:border-dark-border dark:bg-dark-background dark:hover:bg-dark-border transition-all duration-300 ease-in-out">
            <category.icon className="w-14 h-10 text-primary-blue dark:text-text-dark dark:group-hover:text-primary-blue transition-all duration-300 ease-in-out " />
            <h2 className="text-sm capitalize mt-1">{category.name}</h2>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default Categorys
