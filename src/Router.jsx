import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './pages/home/Home.jsx';
import { Catalogo } from './pages/catalogo/Catalogo.jsx'
import { Favoritos } from './pages/favoritos/Favoritos.jsx'
import { Busqueda } from './pages/busqueda/Busqueda.jsx'
import { FichaPelicula } from './pages/fichaPelicula/FichaPelicula.jsx';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/Busqueda" element={<Busqueda />} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/pelicula/:id" element={<FichaPelicula />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;