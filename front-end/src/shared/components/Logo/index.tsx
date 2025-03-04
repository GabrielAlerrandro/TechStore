import { Link } from "react-router-dom"

function Logo() {
  return (
    <Link to="/">
      <section className="flex flex-row gap-1 not items-center w-7 ">
        <img src="/src/assets/logo.svg" alt="logo"></img>
        <h1 className="hidden text-2xl font-bold text-primary-blue md:block">TechStore</h1>
      </section>
    </Link>
  )
}
// erick esteve aqui e deixou hidden pra mobile te odeio gb

export default Logo
