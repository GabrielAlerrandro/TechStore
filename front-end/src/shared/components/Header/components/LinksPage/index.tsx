import { NavLink } from "react-router-dom"

function LinksPages() {
  const links = [
    { name: "home", path: "/" },
    { name: "produtos", path: "/products" },
    { name: "categorias", path: "/categories" },
  ]
  return (
    <section className="md:flex hidden flex-row gap-4 capitalize  ">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "active-link text-primary-blue font-bold "
              : "text-light dark:text-dark font-medium"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </section>
  )
}

export default LinksPages
