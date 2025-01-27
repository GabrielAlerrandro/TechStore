import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function Admin(){
    return (
        <>
        <header className="mb-3">
            <NavBar/>
        </header>
        <div className="flex">
        <aside className="">
            <SideBar/>
        </aside>
        <main className="ml-2">
        <section>
            <Outlet/>
        </section>
        </main>
        </div>
        </>
    )
}

export default Admin