import { NavLink } from "react-router-dom"

function LinksPages() {
  const links = [
    { name: "home", path: "/" },
    { name: "produtos", path: "/products" },
    { name: "categorias", path: "/categories" },
  ]
  return (
    <div className="flex flex-row gap-4 capitalize  ">
      {links.map((link) => (
        <NavLink
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "active-link text-primary-blue font-bold "
              : "text-text-light dark:text-text-dark "
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  )
}

export default LinksPages
