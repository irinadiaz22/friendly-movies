import { MovieTcard } from "../movie-T-card/MovieTcard";
import "./tendencias.css";

export const Tendencias = () => {
    return (
        <div>
            <section aria-label="Tendencias">
                            <h2>Tendencias</h2>
                            <ul class="movie-tendencias">
                                <li>
                                    <MovieTcard />
                                </li>
                                <li>
                                    <MovieTcard />
                                </li>
                                <li>
                                    <MovieTcard />
                                </li>
            
                            </ul>
                        </section>
        </div>
    )
}
