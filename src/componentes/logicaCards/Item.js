import { Card } from 'react-bootstrap';
import '../logicaCards/itemList.css'
import '../contador/itemCount.css'
import { Link } from "react-router-dom";





const Item = ({id,imagen, nombre, precio}) => (
    <Card className="marg " style={{  height: '30rem' }} >
        <Card.Img variant="top" src={[imagen]} alt='foto producto' />
        <Card.Body>
            <Card.Title>{[nombre]}</Card.Title>
            <Card.Text>
                {'$'+[precio]}
            </Card.Text>
        </Card.Body>
        <div className="card-footer">
        <Link to={`/product/${id}`}><button>Ver Detalles</button></Link>
        </div>

    </Card>
)

export default Item;

// const handleClick = (total) => {
//     alert(`La cantidad agregada es ${total}`)
//     }
// <ItemCount stock={8} initial={1} onAdd={handleClick} />