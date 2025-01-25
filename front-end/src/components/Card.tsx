import { ReactNode } from "react"

interface CardProps {
  className: string
  children: ReactNode
  onMouseLeave?: () => void
}

export function Card({ className, children, onMouseLeave }: CardProps) {
  return (
    <section className={className} onMouseLeave={onMouseLeave}>
      {children}
    </section>
  )
}
