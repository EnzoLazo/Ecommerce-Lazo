import './App.css';
import ItemListContainer from './componentes/carrito/ItemListContainer';
import Header from './componentes/header/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Temporada from './componentes/Temporada';
import Envios from './componentes/Envios';
import ItemDetailContainer from './componentes/carrito/ItemDetailContainer';


function App() {


  return (
    <BrowserRouter>
      <Header nombre={"ECommerce"} />
      <main>
      <Routes>
                        <Route path="/" element={<ItemListContainer key={"ItemListContainer1"}  greeting={"ACA VA EL HERO"} />}/>
                        <Route path="../src/componentes/carrito/ItemListContainer.js" element={<ItemListContainer key={"ItemListContainer"}  greeting={"ACA VA EL HERO"} />}/>
                        <Route path="../src/componentes/Temporada.js" element={<Temporada/>}/>
                        <Route path="/../src/componentes/Envios.js" element={<Envios/>}/>
                        <Route path="/producto/:id" element={<ItemDetailContainer />} />
                    </Routes>
      </main>
    </BrowserRouter>
      
  );
}

export default App;
