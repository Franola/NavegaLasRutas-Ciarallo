import './styles.css'
import Card from "./Card"

function ItemList({items}) {
    return (
        <div className='itemList'>
            {items.map((item) => (
                <Card
                    key={item.id}
                    nombre={item.nombre}
                    precio={item.precio}
                    desarrollador={item.desarrollador}
                />
            ))}
        </div>
      )
}

export default ItemList