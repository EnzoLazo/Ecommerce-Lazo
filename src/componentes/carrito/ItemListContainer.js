import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './itemListContainter.css'
import etermax from '../../assets/img/etermax.jpg';

export const ItemListContainer = () => {
    return (
        <div >
            <Card id='margen' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={etermax} alt="venta" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
