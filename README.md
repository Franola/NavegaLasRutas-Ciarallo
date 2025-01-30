# Apolo 99

Apolo 99 es una tienda en línea de videojuegos desarrollada con React y Vite. Este proyecto permite a los usuarios navegar por una lista de juegos, ver detalles de cada juego y agregar productos a un carrito de compras.

## Estructura del Proyecto

```
.gitignore
index.html
package.json
public/
README.md
src/
	App.css
	App.jsx
	assets/
		productos/
	components/
		CartWidget.css
		CartWidget.jsx
		CheckoutModal.css
		CheckoutModal.jsx
		context/
			CarritoContext.jsx
			productosContext.jsx
		DetalleProducto.css
		DetalleProducto.jsx
		Error.jsx
		ItemCarrito.css
		ItemCarrito.jsx
		ItemCount.css
		ItemCount.jsx
		ItemListContainer/
			Card.jsx
			ItemList.jsx
			ItemListContainer.jsx
			styles.css
		Layout.jsx
		NavBar.css
		NavBar.jsx
	index.css
	main.jsx
vite.config.js
```

## Instalación

1. Clona el repositorio:

```sh
git clone https://github.com/Franola/ProyecoFinal-Ciarallo.git
```

2. Navega al directorio del proyecto:

```sh
cd ProyecoFinal-Ciarallo
```

3. Instala las dependencias del cliente:

```sh
npm install
```

## Uso

1. Inicia proyecto:

```sh
npm run dev
```

2. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Funcionalidades

- **Navegación**: Los usuarios pueden navegar por diferentes categorías de juegos (nuevos y retro).
- **Detalles del Producto**: Los usuarios pueden ver detalles de cada juego.
- **Carrito de Compras**: Los usuarios pueden agregar juegos al carrito de compras, ver el contenido del carrito y proceder al checkout.
- **Checkout**: Los usuarios pueden completar su compra llenando un formulario de checkout.

## Dependencias

- React
- React Router DOM
- Bootstrap
- Firebase
- Node Fetch
- Vite

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contactarme a través de [fran.jc02@gmail.com](mailto:fran.jc02@gmail.com).

¡Gracias por usar Apolo 99!
