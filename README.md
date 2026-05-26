🎬 Friendly Movies
Aplicación web desarrollada con React + Vite que permite explorar películas, ver su rating, realizar búsqueda local y navegar por un catálogo con scroll infinito.
Los datos se obtienen desde la API de The Movie Database (TMDB).

🚀 Tecnologías utilizadas
React
Vite
React Router DOM
TMDB API
CSS Modules / estilos personalizados

📦 Instalación
Clona el repositorio:

bash
git clone https://github.com/tu-usuario/friendly-movies.git
cd friendly-movies

Instala dependencias:

bash
npm install

🔑 Variables de entorno
Este proyecto usa Vite, por lo que las variables deben comenzar con VITE_.

▶️ Ejecutar en modo desarrollo
bash
npm run dev
La aplicación estará disponible en:

Código
http://localhost:5173

📁 Estructura del proyecto
Código
src/
 ├── api/
 │    └── movies.js        # Llamadas a la API de TMDB
 ├── components/
 │    └── MovieCard.jsx    # Tarjeta de película
 ├── pages/
 │    ├── Home.jsx
 │    └── CatalogPage.jsx  # Catálogo con scroll infinito + búsqueda local
 ├── App.jsx               # Rutas principales
 └── main.jsx              # Punto de entrada

🎞️ Funcionalidades principales

✔️ Catálogo de películas (Top Rated)
Obtiene películas desde TMDB usando /movie/top_rated
Muestra título, año, rating y póster

✔️ Scroll infinito
Carga automática de más películas al llegar al final de la página

Implementado con IntersectionObserver
✔️ Búsqueda local
Filtra las películas ya cargadas sin llamar a la API
Tipos de búsqueda:
Película (por título)
Año (por release_date)
Muestra mensaje “No hay resultados” cuando no hay coincidencias

✔️ Navegación con React Router
Home
Catálogo
Login (estructura preparada)

🔍 Scripts disponibles
Comando	Descripción
npm run dev	Inicia el servidor de desarrollo
npm run build	Genera la versión de producción
npm run preview	Previsualiza la build

🛠️ Mejoras futuras
Página de detalles de película
Sistema de favoritos
Autenticación con TMDB
Loader animado para scroll infinito

👩‍💻 Autora
Irina Elizabeth Díaz Castillo  
Proyecto Friendly Movies — 2026