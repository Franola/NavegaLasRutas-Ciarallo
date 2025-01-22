import './styles.css'
import ItemList from './ItemList'
//  import ProdutosContext, {productos} from './components/context/productosContext';
import { useEffect,useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom"
import ProdutosContext from '../context/productosContext';

function ItemListContainer({mensaje}) {
  const {categoria} = useParams();
  const { productos } = useContext(ProdutosContext);
  const [items, setItems] = useState([]);
  console.log(productos)

  useEffect(() => {
    if(productos.length != items.length){
      setItems(productos);
    }

  }, [productos]);

    return (
        <div className="itemListContainer">
            <h1>{mensaje + (categoria != undefined ? categoria : "")}</h1>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer