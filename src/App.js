import './App.css';
import ItemListContainer from './componentes/carrito/ItemListContainer';
import Header from './componentes/header/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import products from '../src/componentes/stock.json';
import Temporada from './componentes/Temporada';
import Envios from './componentes/Envios';
import ItemDetailContainer from './componentes/carrito/ItemDetailContainer';


function App() {

  const links = [
    { href: "../src/componentes/carrito/ItemListContainer.js", name: "productos", id: 1 },
    { href: "../src/componentes/Ofertas.js", name: "ofertas", id: 2 },
    { href: "../src/componentes/Temporada.js", name: "temporadas", id: 3 },
    { href: "../src/componentes/Envios.js", name: "envios", id: 4 }
]
  return (
    <BrowserRouter>
      <Header nombre={"ECommerce"} links={links}/>
      <main>
      <Routes>
                        <Route path="/" element={<ItemListContainer key={"ItemListContainer1"} products={products} greeting={"ACA VA EL HERO"} />}/>
                        <Route path="../src/componentes/carrito/ItemListContainer.js" element={<ItemListContainer key={"ItemListContainer1"} products={products} greeting={"ACA VA EL HERO"} />}/>
                        <Route path="../src/componentes/Temporada.js" element={<Temporada/>}/>
                        <Route path="/../src/componentes/Envios.js" element={<Envios/>}/>
                        <Route path="/product/:id" element={<ItemDetailContainer key={"ItemDetailContainer1"} products={products}/>}/>
                    </Routes>
      </main>
    </BrowserRouter>
      
  );
}

export default App;
