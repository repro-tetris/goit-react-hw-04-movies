import React from "react";

function MovieDetailsCard({ info }) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt="" />
      <h2>{info.original_title}</h2>
      <p>Vote average: {info.vote_average}</p>
      <h3>Overview</h3>
      <p>{info.overview}</p>
      <h4>Genres</h4>
      <p>
        {info.genres.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </p>
    </div>
  );
}

export default MovieDetailsCard;