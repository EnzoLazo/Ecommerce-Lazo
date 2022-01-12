import { useState, useEffect } from 'react'
import Header from './componentes/header/Header';
import ItemListContainer from './componentes/carrito/ItemListContainer';
import ItemDetailContainer from './componentes/carrito/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./app.scss"
import Home from './componentes/Home';
import Carrito from './componentes/Carrito';
import CustomProvider, { Provider } from '../src/componentes/miContexto'

function App() {

  let [show, setShow] = useState(false)
  
  const links = [
    { href: "/productos", name: "productos", id: 1 },
    { href: "/categoria/electronics", name: "electronics", id: 2 },
    { href: "/categoria/jewelery", name: "jewelery", id: 3 }
]

  return (
    <CustomProvider>
      <BrowserRouter>
        <Header nombre={"ECommerce"} links={links} />
        <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<ItemListContainer greeting={"Bienvenido!"} />} />
              <Route path="/categoria/:nombre" element={<ItemListContainer greeting={"Bienvenido!"} />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/producto/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CustomProvider>
      
  );
}

export default App;
