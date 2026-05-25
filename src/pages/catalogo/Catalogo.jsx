import "./catalogo.css";
import { useEffect, useState, useRef } from "react";
import { getTopRatedMovies } from "../../api/movies";

import { NavBar } from "../../components/navBar/NavBar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Footer } from "../../components/footer/Footer";
import { MovieCard } from "../../components/movie-card/MovieCard";
import { Tendencias } from "../../components/conteiner-tendencias/Tendencias";

export const Catalogo = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const triggerRef = useRef(null);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await getTopRatedMovies(page);
      console.log(data);
      setMovies(prev => [...prev, ...data]);
    };

    loadMovies();
  }, [page]);

  //scrol infinito
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setPage((prev) => prev + 1);
                }
            },
            { threshold: 1 }
        );

        if (triggerRef.current) {
            observer.observe(triggerRef.current);
        }
        
        return () => {
            observer.disconnect();
        };
    }, []);
    
  return (
    <>
      <main className="content">
        <NavBar />
        <div className="BodyHome">
          <Sidebar className="sideClass" />

          <div className="conteiner">
            <Tendencias />

            <section aria-label="Catalogo">
                
              <h2>Catalogo</h2>
              <ul class="movie-scroll">

                <div key={movies.id} className="movie-list">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
              </ul>
                <div ref={triggerRef} className="infinite-trigger">  
                    <p>Loading...</p>
                </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
