import './styles.css'
import Card from "./Card"
import { useParams } from "react-router-dom"

function ItemList({items}) {
    const {categoria} = useParams();

    if(categoria=="nuevos"){
        items=items.filter(item=>item.categoria==="Juego nuevo")
    }
    if(categoria=="retro"){
        items=items.filter(item=>item.categoria==="Juego retro")
    }
    
    return (
        <div className='itemList'>
            {items.map((item) => (
                <Card
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
      )
}

export default ItemList