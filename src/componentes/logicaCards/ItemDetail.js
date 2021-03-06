import ItemCount from '../contador/ItemCount';
import React from "react";


const handleClick = (total) => {
    alert(`La cantidad agregada es ${total}`)
    }


const ItemDetail = ({ prod }) => {
  console.log(prod);
  return (
    <div>
      <div>
        <h2>{prod.nombre}</h2>
        <p>Precio: $ {prod.precio}</p>
      </div>
      <img src={prod.imagen} alt={prod.nombre}/>
      <ItemCount className='centrar' stock={8} initial={1} onAdd={handleClick} />
    </div>
  );
};

export default ItemDetail;
