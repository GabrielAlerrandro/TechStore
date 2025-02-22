import { SearchIcon } from "lucide-react"
import { Button } from "../../Button"

interface SearchBarToggleProps {
  toggleSearchBar: () => void
  className?: string
}

export function SearchBarToggle({
  toggleSearchBar,
  className,
}: SearchBarToggleProps) {
  return (
    <Button className={className} onClick={toggleSearchBar} type="transparent">
      <SearchIcon size={24} className=" text-light dark:text-dark" />
    </Button>
  )
}
