import { Link,Outlet } from "react-router-dom"
import CartWidget from "./CartWidget"

function Layout() {
  return (
    <>
        <nav className="navbar">
            <a className="titulo">Apolo 99</a>
            <ul className="navbar-items">
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