import React from "react";
import MovieCard from "./Card";
import "./DisplaySearch.css";

function DisplaySearch({ movies }) {
  // Show loading if there are no movies to display
  if (movies.length === 0) {
    return <div className="empty"> <p>Your Result is not matching any.</p></div >;
  }

  return (
    <div className="displaySearch d-flex flex-wrap justify-content-start">
      {movies.map((movie) => (
        <MovieCard
          key={movie.name} // It's important to provide a unique key for each item
          url={movie.image}
          title={movie.name}
          onClick={() => window.open(movie.url, "_blank")}
        />
      ))}
    </div>
  );
}

export default DisplaySearch;
