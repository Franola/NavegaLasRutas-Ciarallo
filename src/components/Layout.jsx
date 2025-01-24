import { Link,Outlet } from "react-router-dom"
import CartWidget from "./CartWidget"
import './NavBar.css'

function Layout() {
  return (
    <>
        <nav className="nav-bar">
            <a className="titulo">Apolo 99</a>
            <ul className="nav-bar-items">
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to={"/nuevos"}>Juegos Nuevos</Link>
                </li>
                <li>
                    <Link to={"/retro"}>Juegos Retro</Link>
                </li>
            </ul>
            <CartWidget/>
        </nav>
        <Outlet/>
    </>
  )
}

export default Layout