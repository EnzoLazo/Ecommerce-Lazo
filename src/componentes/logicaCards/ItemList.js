import {useEffect, useState} from 'react'
import { getFetch } from '../logicaCards/GetFetch';
import '../logicaCards/itemList.css'
import Item from '../logicaCards/Item';


const ItemList = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch 
        .then( res => {        
            console.log('llamada a api') // alguna accion con la respuesta  
            setProduct(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])   

    return (
        <>
            <h2> Nuestros Productos </h2>
            <div className='Flexbox'>
            { loading ? <h1>Cargando...</h1> :         
                    product.map((prod, index) => <Item key={index} imagen={prod.imagen} nombre={prod.nombre} descripcion={prod.descripcion} precio={prod.precio}/>
            
            )
            }
            </div>
        </>
    )
    
            

}
export default ItemList;