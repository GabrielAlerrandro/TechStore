import { Search } from "./components"

interface SearchBarProps {
  isSearchEnabled: boolean
  setIsSearchEnabled: (isEnabled: boolean) => void
}

function SearchBar({ isSearchEnabled, setIsSearchEnabled }: SearchBarProps) {
  const toggleSearchBar = () => {
    setIsSearchEnabled(!isSearchEnabled)
  }

  return (
    <Search.Container>
      {isSearchEnabled ? (
        <>
          <input
            type="text"
            placeholder="Pesquisar"
            className="font-medium rounded-md w-full px-4 py-2  bg-transparent outline-none"
          />
          <Search.Toggle
            toggleSearchBar={toggleSearchBar}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          />
        </>
      ) : (
        <Search.Toggle
          toggleSearchBar={toggleSearchBar}
          className="w-full flex justify-end p-2"
        />
      )}
    </Search.Container>
  )
}

export default SearchBar
