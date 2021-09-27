import React from "react";
import { MovieItem } from "../../Movie";

function MovieList({ items }) {
  const isEmpty = items.length === 0;

  return isEmpty ? (
    <p>No movies</p>
  ) : (
    <ul>
      {items.map((item) => (
        <MovieItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MovieList;
