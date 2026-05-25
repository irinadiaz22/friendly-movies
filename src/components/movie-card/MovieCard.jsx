import "./moviecard.css";

export const MovieCard = ({ movie }) => {
  return (
    <div>
      <article className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
        <h3>{movie.release_date ? movie.release_date.slice(0, 4) : "N/A"} - {parseInt(movie.vote_average)}/10 </h3>

      </article>
    </div>
  );
};
