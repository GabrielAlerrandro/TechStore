import { ReactNode } from "react"

interface ModalContentProps {
  children: ReactNode
}

export function ModalContent({ children }: ModalContentProps) {
  return <main className="mb-4">{children}</main>
}
