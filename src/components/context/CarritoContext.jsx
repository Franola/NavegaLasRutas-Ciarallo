import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        const existe = carrito.some((prod) => prod.id === producto.id);

        if (existe) {
            const cantidadFinal = carrito.find((x) => x.id == producto.id).cantidad + producto.cantidad;

            if(cantidadFinal <= 0) {
                quitarProducto(producto.id);
            }else {
                const carritoActualizado = carrito.map((x) => {
                    if (x.id == producto.id) {
                        return { ...x, cantidad: x.cantidad + producto.cantidad };
                    } else {
                        return x;
                    }
                });
                setCarrito(carritoActualizado);
            }
        } else {
            setCarrito((prev) => [...prev, producto]);
        }
    };

    const vaciar = () => {
        setCarrito([]);
    };

    const quitarProducto = (id) => {
        const carritoActualizado = carrito.filter((x) => x.id !== id);
        setCarrito(carritoActualizado);
    };

    console.log(carrito);

    return (
        <CarritoContext.Provider value={{ carrito, agregarProducto, vaciar, quitarProducto }}>
            {children}
        </CarritoContext.Provider>
    );
};