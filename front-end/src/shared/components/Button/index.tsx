import { HTMLAttributes, ReactNode } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  type: "primary" | "secondary" | "cancel" | "transparent"
}

const ButtonType = {
  primary: "bg-primary-blue text-white",
  secondary: "bg-white text-primary-blue dark:text-primary-blue",
  cancel: "bg-red-600 text-white",
  transparent: "bg-transparent",
}

const baseStyle = "cursor-pointer"

export function Button({ children, className, type, ...rest }: ButtonProps) {
  return (
    <button
      className={`${baseStyle}  ${className} ${ButtonType[type]}`}
      {...rest}
    >
      {children}
    </button>
  )
}
