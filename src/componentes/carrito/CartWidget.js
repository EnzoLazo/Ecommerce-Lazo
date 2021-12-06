import React from 'react'
import carrito from '../../assets/img/carrito.jpg';
import './cartWidget.css'

export const CartWidget = (props) => {
    return (
        <div>
            <img id='separador' src={carrito} alt="carrito" height="40px" />
            <p> Art {props.contado} </p>
        </div>
    )
}
