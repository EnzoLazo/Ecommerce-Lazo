import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import './navBar.css'
import carrito from '../../assets/img/carrito.jpg';
import { CartWidget } from '../carrito/CartWidget';
import { NavLink} from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                <img src={carrito} alt="carrito" height="40px" />
                    <NavLink to="/">
                        <div>
                            <h1>Ecommerce</h1>
                        </div>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link   href="/">Productos</Nav.Link>
                            <Nav.Link   href="../Ofertas.js">Ofertas</Nav.Link>
                            <Nav.Link   href="../Temporada.js">Temporadas</Nav.Link>
                            <Nav.Link   href="../Envios.js">Envios</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container >
                <CartWidget contado={4}/>
            </Navbar>
            
        </div>
    )
}


