import React from "react";
import { useParams } from "react-router-dom";

function MoviePage() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-4xl">Movie Page</h1>
      <p className="text-4xl">Selected Movie ID: {id}</p>
    </div>
  );
}

export default MoviePage;
