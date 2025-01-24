import './CartWidget.css'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

function CartWidget(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            
            <Button variant="primary" onClick={handleShow}>
                <img className="carrito-img" src="src/assets/icon-carrito.png"/>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Contenido del carrito
            </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default CartWidget