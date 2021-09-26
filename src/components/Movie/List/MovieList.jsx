import React from "react";
import MovieItem from "../Item/MovieItem";

function MovieList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <MovieItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MovieList;
