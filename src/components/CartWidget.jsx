import './CartWidget.css'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { CarritoContext } from "./context/CarritoContext";
import ItemCarrito from './ItemCarrito';
import { useEffect } from 'react';
import CheckoutModal from './CheckoutModal';
import React from 'react';

function CartWidget(){
    const [show, setShow] = useState(false);
    const {carrito, vaciar} = useContext(CarritoContext);
    const [total, setTotal] = useState(0);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        let total = 0;
        carrito.forEach((producto) => {
            total += Math.round(producto.price,2) * producto.cantidad;
        });
        setTotal(total);
    }, [carrito]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const mostrarCarrito = () =>{
        if(carrito.length > 0){
            return(
                <>
                    <div className="carrito-lista" id="carrito-lista-productos">
                        {carrito.map((producto) => (
                            <ItemCarrito key={producto.id} producto={producto}/>
                        ))}
                    </div>
                    
                    <div className="carrito-footer pt-3 d-flex justify-content-between align-items-center">
                        <div className="carrito-total">
                            <span>Total: </span>
                            <span className="carrito-precio-total" id="valor-total-carrito">$ {total}</span>
                        </div>
                        <Button variant="success" onClick={() => setModalShow(true)}>Comprar</Button>
                        <Button variant="danger" onClick={vaciar}>Vaciar Carrito</Button>
                    </div>

                    <CheckoutModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        onSubmit={() => {
                            setModalShow(false);
                            vaciar();
                        }}
                    />
                </>
            )
        }else{
            return(
                <p>El carrito está vacío</p>
            )
        }
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow} className="d-flex align-items-center">
                <img className="carrito-img" src="/src/assets/icon-carrito.png"/>
                {carrito.length > 0 && <p className="cantidad-productos"><b>{carrito.length}</b></p>}
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column">
                {mostrarCarrito()}
            </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default CartWidget