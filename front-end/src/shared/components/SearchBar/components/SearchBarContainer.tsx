interface SearchBarContainerProps {
  children: React.ReactNode
}

function SearchBarContainer({ children }: SearchBarContainerProps) {
  return (
    <div className="relative w-80 text-light dark:text-dark">{children}</div>
  )
}

export default SearchBarContainer
