import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje="Bienvenidos a la tienda"/>
    </>
  )
}

export default App
