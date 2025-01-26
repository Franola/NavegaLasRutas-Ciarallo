import './ItemCarrito.css'
import { useContext } from "react";
import { CarritoContext } from "./context/CarritoContext";

function ItemCarrito({producto}) {
    const {agregarProducto, quitarProducto} = useContext(CarritoContext);
    
    return (
        <div className="carrito-item row gx-0">
            <div className="col-md-4">
                <img className="carrito-item-img" src="/src/assets/test.jpg" alt={producto.nombre}/>
            </div>
            <div className="col-md-8 row gx-0 align-content-around">
                <span className="carrito-item-titulo col-md-12">{producto.name}</span>
                <div className="col-md-12 d-flex justify-content-between align-items-center">
                    <div className="carrito-item-botones d-flex align-items-center">
                        <button className="btn btn-primary carrito-eliminar-btn d-flex justify-content-center align-items-center" type="button" onClick={() => quitarProducto(producto.id)}>
                            <img className="basura-img" src="/src/assets/icon-eliminar.png" alt="Eliminar"/>
                        </button>
                        <button className="btn btn-primary  carrito-menos-btn d-flex justify-content-center align-items-center" type="button" onClick={() => agregarProducto({...producto, cantidad: -1 })}>
                            <img className="menos-img" src="/src/assets/icon-menos.png" alt="Quitar uno"/>
                        </button>
                        <span className="carrito-item-cantidad" >{producto.cantidad}</span>
                        <button className="btn btn-primary carrito-mas-btn d-flex justify-content-center align-items-center" type="button" onClick={() => agregarProducto({...producto, cantidad: 1 })}>
                            <img className="mas-img" src="/src/assets/icon-mas.png" alt="Agregar uno"/>
                        </button>
                    </div>
                    <span className="carrito-item-precio" >$ {Math.round(producto.price,2)*producto.cantidad}</span>
                </div>
            </div>
        </div>
    );
}

export default ItemCarrito;