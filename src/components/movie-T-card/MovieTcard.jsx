import "./movieTcard.css";

export const MovieTcard = ({ movie }) => {
  return (
    <div>
      <article className="movieT-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="img-pelicula"

        />
        <h3>{movie.title}</h3>
        <h3>{movie.release_date} - {parseInt(movie.vote_average)}/10</h3>
      </article>
    </div>
  );
};
