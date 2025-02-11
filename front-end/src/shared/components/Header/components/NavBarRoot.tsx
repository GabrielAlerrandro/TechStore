import { ReactNode } from "react"

interface NavBarRootProps {
  children: ReactNode
  className?: string
}

export function NavBarRoot({ children, className }: NavBarRootProps) {
  return <nav className={className}>{children}</nav>
}
