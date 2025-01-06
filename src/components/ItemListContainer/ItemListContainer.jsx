import './styles.css'
import ItemList from './ItemList'
import { productos } from "../../data/productos";
import { useEffect,useState } from "react";

function ItemListContainer({mensaje}) {
    const [items,setItems]=useState([]);
    const [first_fetch,setFirst_fetch]=useState(false);

    useEffect(() => {
      
      fetch("http://localhost:5000/proxy/games", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: "fields id,name,involved_companies.company.name,release_dates.human,first_release_date,genres.name,summary; where involved_companies != null & first_release_date >= 852087600 & category=0; limit 12;",
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setItems(data)
        setFirst_fetch(true)
      })
      .catch(err => console.error(err));
      
    },[])

    useEffect(() => {
      if(first_fetch){
        console.log(items)
        fetch("http://localhost:5000/proxy/games", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: "fields id,name,involved_companies.company.name,release_dates.human,first_release_date,genres.name,summary; where involved_companies != null & first_release_date < 852087600 & category=0; limit 12;",
          }),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setItems(items.concat(data))
        })
        .catch(err => console.error(err));
    	}
    },[first_fetch])

    return (
        <div className="itemListContainer">
            <h1>{mensaje}</h1>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer