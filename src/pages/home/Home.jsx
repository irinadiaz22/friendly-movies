import "./home.css";

import { NavBar } from "../../components/navBar/NavBar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Footer } from "../../components/footer/Footer";
import { ButCatalog } from "../../components/bottons/ButCatalog";
import { ButLogin } from "../../components/bottons/ButLogin";

export const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.logged) {
    console.log("Usuario logueado:", user.email);
  }

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
              <ButCatalog />

              <ButLogin />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
