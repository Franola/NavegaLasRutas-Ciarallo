import './styles.css'
import Card from "./Card"
import { useParams } from "react-router-dom"

function ItemList({items}) {
    const {categoria} = useParams();
    console.log(items)
    if(categoria=="nuevos"){
        items=items.filter(item=>item.first_release_date >= 852087600)
    }
    if(categoria=="retro"){
        items=items.filter(item=>item.first_release_date < 852087600)
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