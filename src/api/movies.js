const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getTopRatedMovies = async (page = 1) => {
    try {
        const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error al obtener las peliculas", error);
        return [];
    }
};

export const getMoviesTendencias = async () => {
    try {
        const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
        const data = await response.json();

        const sortedMovies = data.results.sort((a, b) => b.vote_average - a.vote_average);
        const top5Movies = sortedMovies.slice(0, 6);

        return top5Movies;

    } catch (error) {
        console.error("Error al obtener las peliculas en tendencia", error);
        return [];
    }
};