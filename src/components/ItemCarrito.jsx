import './ItemCarrito.css'
import ItemCount from './ItemCount';

function ItemCarrito({producto}) {
    
    return (
        <div className="carrito-item row gx-0">
            <div className="col-md-4">
                <img className="carrito-item-img" src={`/src/assets/productos/${producto.cover.image_id}.webp`} alt={producto.nombre}/>
            </div>
            <div className="col-md-8 row gx-0 align-content-around">
                <span className="carrito-item-titulo col-md-12">{producto.name}</span>
                <div className="col-md-12 d-flex justify-content-between align-items-center">
                    <ItemCount producto={producto} />
                    <span className="carrito-item-precio" >$ {Math.round(producto.price,2)*producto.cantidad}</span>
                </div>
            </div>
        </div>
    );
}

export default ItemCarrito;