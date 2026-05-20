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
        <Route path="/" element={<Trending />} />
        <Route path="/" element={<Catalogo />} />
        <Route path="/" element={<Busqueda />} />
        <Route path="/" element={<Favoritos />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;