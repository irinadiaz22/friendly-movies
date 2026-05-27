import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../../api/movies";
import { ButCatalog } from "../../components/bottons/ButCatalog";
import { NavBar } from "../../components/navBar/NavBar";

import "./fichapelicula.css";
import { Sidebar } from "../../components/sidebar/Sidebar";

export const FichaPelicula = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };
    loadMovie();
  }, [id]);

  if (!movie) return <p>Cargando la ficha de la película...</p>;

  return (
    <div>
      <NavBar />

      <div className="ficha-conteiner">
        <Sidebar />
        
        <div className="conteiner-info">
            <h1>{movie.title}</h1>
          <h3>Fecha de publicación: {movie.release_date} </h3>
          <h3>Puntuación: {movie.vote_average}/10 </h3>
          <h3>Sinopsis:</h3>
          <p>{movie.overview}</p>

          <ButCatalog />
        </div>

        <div className="conteiner-ficha">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        
      </div>
    </div>
  );
};
