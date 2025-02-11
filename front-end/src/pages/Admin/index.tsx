import { Outlet } from "react-router-dom"
import { Header } from "./components/NavBar"
import SideBar from "./components/SideBar"

function Admin() {
  return (
    <>
      <header className="mb-3">{/* <Header /> */}</header>

      <div className="flex">
        <aside className="">
          <SideBar />
        </aside>

        <main className="ml-2">
          <section>
            <Outlet />
          </section>
        </main>
      </div>
    </>
  )
}

export default Admin
