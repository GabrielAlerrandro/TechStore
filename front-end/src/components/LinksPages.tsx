import { NavLink } from "react-router-dom"

function LinksPages() {
  const links = [
    { name: "home", path: "/" },
    { name: "produtos", path: "/products" },
    { name: "categorias", path: "/categories" },
  ]
  return (
    <section className="flex flex-row gap-4 capitalize  ">
      {links.map((link) => (
        <NavLink
          key={link.name}
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
    </section>
  )
}

export default LinksPages
