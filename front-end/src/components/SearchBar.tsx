import { SearchIcon } from "lucide-react"
import { Button } from "./Button"

interface SearchBarProps {
  isSearchEnabled: boolean
  setIsSearchEnabled: (isEnabled: boolean) => void
}

function SearchBar({ isSearchEnabled, setIsSearchEnabled }: SearchBarProps) {
  const toggleSearchBar = () => {
    setIsSearchEnabled(!isSearchEnabled)
  }

  return (
    <div className="relative w-80">
      {isSearchEnabled ? (
        <>
          <input
            type="text"
            placeholder="Pesquisar"
            className="font-medium rounded-md w-full px-4 py-2 text-text-light bg-transparent outline-none dark:text-text-dark"
          />
          <Button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-text-light dark:text-text-dark"
            onClick={toggleSearchBar}
          >
            <SearchIcon size={24} />
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={toggleSearchBar}
            className="w-full flex justify-end p-2 text-text-light dark:text-text-dark"
          >
            <SearchIcon size={24} />
          </Button>
        </>
      )}
    </div>
  )
}

export default SearchBar
