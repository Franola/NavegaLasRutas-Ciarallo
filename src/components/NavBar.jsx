import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar(){
    return (
        <nav className="navbar">
            <a className="titulo">Apolo 99</a>
            <ul className="navbar-items">
                <li><button>Juegos Nuevos</button></li>
                <li><button>Juegos Retro</button></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar