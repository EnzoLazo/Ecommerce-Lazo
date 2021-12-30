import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../logicaCards/ItemDetail";
import {getFetch} from '../logicaCards/GetFetch';

const ItemDetailContainer = () => {
  let {id} = useParams()
  const [selected, setSelected] = useState({});

  useEffect(() => {
    getFetch 
    .then( res => {   
        const product = res?.find((prod) => prod.id === parseInt(id));     
        console.log('llamada a api') // alguna accion con la respuesta  
        setSelected(product)
    })    
    .catch(err => console.log(err))
},[])   


return(

    selected?.nombre === undefined?

    <h1>Cargando...</h1>

    :

    <ItemDetail prod={selected}/>
    

  )

}
export default ItemDetailContainer;