import React from "react";
import { Link } from "react-router-dom";

function MovieItem({ item: { id, title } }) {
  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
}

export default MovieItem;
