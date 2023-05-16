import React from "react";
import withFetch from "./withFetch";
const MoviesList = (props) => {
  const { movies } = props;
  console.log(movies);
  return (
    <div>
      <h1>Movie List - with HOC</h1>
      {
        <ul>
          {movies.map((movie, index) => {
            return (
              <li key={index}>
                <img src={movie.poster} alt={movie.title} />
                <span>{movie.title}</span>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

const HOC = withFetch(MoviesList);
export default HOC;
