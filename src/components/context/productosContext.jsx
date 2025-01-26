import { createContext, useState, useEffect } from "react";
import { getQuery } from "../../data/query";
import { use } from "react";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";

const ProdutosContext = createContext();

export const ProdutosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        
        let refCollection = collection(db, "Productos");
    
        getDocs(refCollection)
            .then((snapshot) => {
                setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            .finally(() => console.log(productos));
    },[]);

    return (
        <ProdutosContext.Provider value={{ productos }}>
            {children}
        </ProdutosContext.Provider>
    );
};


export default ProdutosContext;