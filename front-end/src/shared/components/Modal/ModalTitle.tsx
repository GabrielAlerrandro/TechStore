import { Button } from "../Button"
import { X } from "lucide-react"

interface ModalTitleProps {
  children: string
  onClose: () => void
}

export function ModalTitle({ children, onClose }: ModalTitleProps) {
  return (
    <div className="flex flex-row items-center justify-between mb-4 ">
      <h2 className="text-2xl font-semibold">{children}</h2>
      <Button
        type="transparent"
        aria-label="Fechar modal"
        onClick={onClose}
        className="hover:text-red-600 transition ease-in-out"
      >
        <X size={24} />
      </Button>
    </div>
  )
}
