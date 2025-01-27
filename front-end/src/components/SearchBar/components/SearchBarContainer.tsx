interface SearchBarContainerProps {
  children: React.ReactNode
}

function SearchBarContainer({ children }: SearchBarContainerProps) {
  return <div className="relative w-80">{children}</div>
}

export default SearchBarContainer
