import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar(){
    return (
        <div class="navbar">
            <a class="titulo">Apolo 99</a>
            <ul class="navbar-items">
                <li><button>Juegos Nuevos</button></li>
                <li><button>Juegos Retro</button></li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar