import { ReactNode } from "react"

function Card({
  className,
  children,
}: {
  className: string
  children: ReactNode
}) {
  return <div className={className}>{children}</div>
}

export default Card
