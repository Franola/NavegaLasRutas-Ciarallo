import './ItemCount.css';
import { useContext } from "react";
import { CarritoContext } from "./context/CarritoContext";

function ItemCount({producto}) {
    const {agregarProducto, quitarProducto} = useContext(CarritoContext);

    return (
        <div className="carrito-item-botones d-flex align-items-center">
            <button className="btn btn-secondary carrito-eliminar-btn d-flex justify-content-center align-items-center" type="button" onClick={() => quitarProducto(producto.id)}>
                <img className="basura-img" src="/src/assets/icon-eliminar.png" alt="Eliminar"/>
            </button>
            <button className="btn btn-secondary  carrito-menos-btn d-flex justify-content-center align-items-center" type="button" onClick={() => agregarProducto({...producto, cantidad: -1 })}>
                <img className="menos-img" src="/src/assets/icon-menos.png" alt="Quitar uno"/>
            </button>
            <span className="carrito-item-cantidad">{producto.cantidad}</span>
            <button className="btn btn-secondary carrito-mas-btn d-flex justify-content-center align-items-center" type="button" onClick={() => agregarProducto({...producto, cantidad: 1 })}>
                <img className="mas-img" src="/src/assets/icon-mas.png" alt="Agregar uno"/>
            </button>
        </div>
    );
}

export default ItemCount;