import { ReactNode } from "react"

interface CardProps {
  className: string
  children: ReactNode
  onMouseLeave?: () => void
}

export function Card({ className, children }: CardProps) {
  return <section className={className}>{children}</section>
}
