import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import './navBar.css'
import carrito from '../../assets/img/carrito.jpg';
import { CartWidget } from '../carrito/CartWidget';

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                <img src={carrito} alt="carrito" height="40px" />
                    <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link   href="#home">Productos</Nav.Link>
                            <Nav.Link   href="#link">Ofertas</Nav.Link>
                            <Nav.Link   href="#link">Temporadas</Nav.Link>
                            <Nav.Link   href="#link">Envios</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container >
                <CartWidget contado={4}/>
            </Navbar>
            
        </div>
    )
}

