import { ReactNode } from "react"

interface NavBarContentProps {
  children: ReactNode
  className?: string
}

export function NavBarContent({ children, className }: NavBarContentProps) {
  return <section className={className}>{children}</section>
}
