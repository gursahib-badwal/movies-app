import MovieCard from "../components/MovieCard";
import MovieSearch from "../components/MovieSearch";
import { useState, useEffect } from "react";

export default function Home() {
  const [movieImages, setMovieImages] = useState([]);
  const [query, setQuery] = useState("");
  const [renderVar, setRenderVar] = useState(true);

  // -------------------------------FETCHING AND UPDATING USING useEffect AND TMDB API--------------------->

  useEffect(() => {
    const getMovies = async () => {
      try {
        if (query) {
          // Fetch movies based on the search query
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${query}`
          );
          const data = await response.json();
          setMovieImages(data.results);
        } else {
          // Fetch trending movies (default)
          const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
          );
          const data = await response.json();
          setMovieImages(data.results);
        }
        setRenderVar(false);
      } catch (err) {
        console.log(err);
      }
    };
    // Fetch trending movies on the initial render
    getMovies();
  }, [query]);
  // ------------------------------------------------------------------------------------------------------------------

  const display_array = movieImages.map((movie) => {
    return <MovieCard {...movie} key={movie.id} />;
  });

  function search_movie(movie) {
    setQuery(movie);
  }

  return (
    <div>
      <div className="container mx-auto">
        <MovieSearch searchMovie={search_movie} />

        {!renderVar && movieImages.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
        )}

        {renderVar ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4 ml-16">{display_array}</div>
        )}
      </div>
    </div>
  );
}
