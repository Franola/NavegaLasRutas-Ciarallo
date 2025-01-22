import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Layout from './components/Layout'
import Error from './components/Error';
import DetalleProducto from './components/DetalleProducto';
import { useState } from "react";
import { ProdutosProvider } from './components/context/productosContext';

function App() {

  // const [items,setItems] = useState(productos);
  // const handleProductos = (productos) => {
  //   setItems(productos)
  // }

  return (
    <>
      <ProdutosProvider>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>  
                  <Route index element={<ItemListContainer mensaje="Bienvenidos a la tienda"/>} />
                  <Route path=':categoria' element={<ItemListContainer mensaje="Juegos "/>} />
                  <Route path='producto/:id' element={<DetalleProducto/>} />
                  <Route path='*' element={<Error/>} />
              </Route>
          </Routes>
        </BrowserRouter>
      </ProdutosProvider>
    </>
  )
}

export default App
