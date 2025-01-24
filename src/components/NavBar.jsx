import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar(){
    return (
        <nav className="nav-bar">
            <a className="titulo">Apolo 99</a>
            <ul className="nav-bar-items">
                <li><button>Juegos Nuevos</button></li>
                <li><button>Juegos Retro</button></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar