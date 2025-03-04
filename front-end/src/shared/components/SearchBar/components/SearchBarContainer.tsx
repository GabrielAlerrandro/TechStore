interface SearchBarContainerProps {
  children: React.ReactNode
}
//erick esteve aqui e colocou o md:flex e deixou hidden pra mobile
function SearchBarContainer({ children }: SearchBarContainerProps) {
  return (
    <div className="relative hidden w-80 text-light dark:text-dark md:flex">{children}</div>
  )
}

export default SearchBarContainer
