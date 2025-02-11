import { ReactNode } from "react"

interface CardProps {
  className: string
  children: ReactNode
  onMouseLeave?: () => void
  onClick?: () => void
}

export function Card({
  className,
  children,
  onMouseLeave,
  onClick,
}: CardProps) {
  return (
    <section
      className={className}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </section>
  )
}
