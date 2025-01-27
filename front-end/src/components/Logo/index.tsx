import { Link } from "react-router-dom"

function Logo() {
  return (
    <Link to="/">
      <section className="flex flex-row gap-1 items-center w-7 ">
        <img src="/src/assets/logo.svg" alt="logo"></img>
        <h1 className="text-2xl font-bold text-primary-blue">TechStore</h1>
      </section>
    </Link>
  )
}

export default Logo
