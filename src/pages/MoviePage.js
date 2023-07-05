import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MoviePage() {
  const { id } = useParams();

  const [display_movie, setDisplayMovie] = useState({});

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    )
      .then((response) => response.json())
      .then((fetchedData) => {
        setDisplayMovie(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {/* <h1 className="text-4xl">Movie Page</h1>
      <p className="text-4xl">Selected Movie ID: {id}</p> */}
      <h1 className="text-4xl">{display_movie.original_title}</h1>
      <h1>{display_movie.overview}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original${display_movie.poster_path}`}
        alt=""
        className="movie_page_image"
      />
    </div>
  );
}

export default MoviePage;
