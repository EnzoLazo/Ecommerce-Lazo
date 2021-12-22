import ItemCount from '../contador/ItemCount';
import '../contador/itemCount.css'
import '../logicaCards/ItemDetail.css'

const handleClick = (total) => {
    alert(`La cantidad agregada es ${total}`)
    }

const ItemDetail = ({imagen, nombre,descripcion, precio}) => (
    <div className=' marg flex color' style={{  height: '37rem' }}>  
        <div>
            <img src={[imagen]} alt='foto producto'/>
        </div>
        <div className='flex2'>
                <p className='marg letra'> {[nombre]} </p>
                <p className='marg' >{[descripcion]}</p>
                <p className='marg letra2' >{[precio]}</p>
                <ItemCount className='centrar' stock={8} initial={1} onAdd={handleClick} />
        </div>

        
    </div>


 
)

export default ItemDetail;