import "./catalogo.css";

import { NavBar } from "../../components/navBar/NavBar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Footer } from "../../components/footer/Footer";
import { MovieCard } from "../../components/movie-card/MovieCard";
import { Tendencias } from "../../components/conteiner-tendencias/Tendencias";

export const Catalogo = () => {
  return (
    <>
      <main className="content">
        <NavBar />
        <div className="BodyHome">
          <Sidebar className="sideClass" />
          
          <div className="conteiner">

             <Tendencias/>        
            
            <section aria-label="Catalogo">
                <h2>Catalogo</h2>
                <ul class="movie-scroll">
                    <div>
                        <MovieCard />
                    </div>
                    <div>
                        <MovieCard />
                    </div>
                    <div>
                        <MovieCard />
                    </div>
                    <div>
                        <MovieCard />
                    </div>
                    <div>
                        <MovieCard />
                    </div>
                    <div>
                        <MovieCard />
                    </div>
                    <div>
                        <MovieCard />
                    </div>
                    <div>
                        <MovieCard />
                    </div>

                </ul>
            </section>


          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
