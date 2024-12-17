import './styles.css'
import ItemList from './ItemList'
import { productos } from "../../data/productos";
import { useEffect,useState } from "react";

function ItemListContainer({mensaje}) {
    const [items,setItems]=useState([]);

    useEffect(() => {
      const fetchProductos = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        },2000)
      })

      fetchProductos.then((data) => {
        setItems(data)
      })
    },[])

    return (
        <div className="itemListContainer">
            <h1>{mensaje}</h1>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer