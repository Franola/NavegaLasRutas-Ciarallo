import { createContext, useState, useEffect } from "react";
import { getQuery } from "../../data/query";

const ProdutosContext = createContext();

export const ProdutosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [first_fetch, setFirst_fetch] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/proxy/games", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: getQuery(" & first_release_date >= 852087600"),
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProductos(data);
            setFirst_fetch(true)
        })
        .catch(err => console.error(err)); 
    }, []);

    useEffect(() => {
        if(first_fetch){
            fetch("http://localhost:5000/proxy/games", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: getQuery(" & first_release_date < 852087600")
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setFirst_fetch(false)
                setProductos([...productos, ...data]);
            })
            .catch(err => console.error(err));
        }
    },[first_fetch])

    return (
        <ProdutosContext.Provider value={{ productos }}>
        {children}
        </ProdutosContext.Provider>
    );
};


export default ProdutosContext;