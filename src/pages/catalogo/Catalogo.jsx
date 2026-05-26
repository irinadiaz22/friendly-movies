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

  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("all");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const triggerRef = useRef(null);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await getTopRatedMovies(page);
      //console.log(data);
      setMovies((prev) => [...prev, ...data]);
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
      { threshold: 1 },
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  //busqueda
  useEffect(() => {
    let results = movies;
    if (searchText.trim() !== "") {
      if (searchType === "movie") {
        results = movies.filter((m) =>
          m.title.toLowerCase().includes(searchText.toLowerCase()),
        );
      } else if (searchType === "year") {
        results = movies.filter((m) =>
          m.release_date.slice(0, 4).includes(searchText),
        );
      }
    }

    setFilteredMovies(results);
  }, [searchText, searchType, movies]);

  return (
    <>
      <main className="content">
        <NavBar />
        <div className="BodyHome">
          <Sidebar className="sideClass" />

          <div className="conteiner">
            <h1>Catalogo</h1>
            <section aria-label="Catalogo">
              <div className="busqueda">
                <p>Buscar por:</p>
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                >
                  <option value="all">Todos</option>
                  <option value="movie">Película</option>
                  <option value="year">Año</option>
                </select>

                <div className="txtbusqueda">
                  <input
                    type="text"
                    placeholder="Selecciona el tipo de búsqueda..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
              </div>

              {filteredMovies.length === 0 ? (
                <p className="no-results">No se encontraron resultados</p>
              ) : (
                <ul className="movie-scroll">
                  <div className="movie-list">
                    {filteredMovies.map((movie) => (
                      <MovieCard movie={movie} />
                    ))}
                  </div>
                </ul>
              )}
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
