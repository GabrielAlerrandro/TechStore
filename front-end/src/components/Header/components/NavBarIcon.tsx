import { ElementType, HTMLAttributes } from "react"

interface NavBarIconProps extends HTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

export function NavBarIcon({ icon: Icon, ...rest }: NavBarIconProps) {
  return (
    <Icon
      className="cursor-pointer text-text-light dark:text-text-dark"
      {...rest}
    />
  )
}
