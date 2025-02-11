import { ReactNode } from "react"

interface ModalRootProps {
  children: ReactNode
}

export function ModalRoot({ children }: ModalRootProps) {
  return (
    <main className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 dark:bg-dark-background dark:text-white   "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </main>
  )
}
