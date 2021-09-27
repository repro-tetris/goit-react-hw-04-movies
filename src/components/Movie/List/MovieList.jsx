import React from "react";
import { PropTypes } from "prop-types";
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

MovieList.propTypes = {
  items: PropTypes.array,
};
export default MovieList;
