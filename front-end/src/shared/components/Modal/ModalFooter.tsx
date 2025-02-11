import { ReactNode } from "react"

interface ModalFooterProps {
  children: string | ReactNode
}

export function ModalFooter({ children }: ModalFooterProps) {
  return <footer>{children}</footer>
}
