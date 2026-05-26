import { MovieTcard } from "../movie-T-card/MovieTcard";
import {getMoviesTendencias} from "../../api/movies";
import { useEffect, useState } from "react";
import "./tendencias.css";

export const Tendencias = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const moviesData = await getMoviesTendencias();
            setMovies(moviesData);
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <section aria-label="Tendencias">
                            <h2>Tendencias</h2>
                            <ul className="movie-tendencias">
                                {movies.map((movie) => (
                                    <li key={movie.id}>
                                        <MovieTcard movie={movie} />
                                    </li>
                                ))} 
            
                            </ul>
                        </section>
        </div>
    )
}
