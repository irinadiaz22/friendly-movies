import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './pages/home/Home.jsx';
import { Catalogo } from './pages/catalogo/Catalogo.jsx'
import { Favoritos } from './pages/favoritos/Favoritos.jsx'
import { Busqueda } from './pages/busqueda/Busqueda.jsx'
import { Trending } from './pages/trending/Trending.jsx'
 
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/Busqueda" element={<Busqueda />} />
        <Route path="/Favoritos" element={<Favoritos />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;