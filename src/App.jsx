import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Layout from './components/Layout'
import Error from './components/Error';
import DetalleProducto from './components/DetalleProducto';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>  
                <Route index element={<ItemListContainer mensaje="Bienvenidos a la tienda"/>} />
                <Route path=':categoria' element={<ItemListContainer mensaje="Juegos Nuevos"/>} />
                <Route path=':categoria' element={<ItemListContainer mensaje="Juegos Retro"/>} />
                <Route path='producto/:id' element={<DetalleProducto/>} />
                <Route path='*' element={<Error/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
