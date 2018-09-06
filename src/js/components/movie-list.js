import React from "react";

const MovieList = ({
  movies
}) => {
  console.log('movies', movies);
  return (
    <div>
      {
        movies.map(movie => {
          return (
            <div>
              {movie.title}
            </div>
          );
        })
      }
    </div>
  );
};

export default MovieList;
