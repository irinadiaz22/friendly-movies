import "./home.css";

import { NavBar } from "../../components/navBar/NavBar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Footer } from "../../components/footer/Footer"

export const Home = () => {
  return (
    <>
    
      <main className="content">
        <NavBar />

        <div className="BodyHome">
          <Sidebar className="sideClass" />
          <div className="hero">
            <h1>Vívelo como en el cine</h1>
            <p>
              Sumérgete en una experiencia cinematográfica de alta fidelidad.
              Curada exclusivamente para los amantes del séptimo arte.
            </p>

            <div className="buttons">
              <button className="btnPrimary">Ver Catálogo</button>
              <button className="bntSecondary">Iniciar Sesión</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
