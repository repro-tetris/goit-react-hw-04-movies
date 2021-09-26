import React from "react";
import s from "./MovieDetailsCard.module.css";

function MovieDetailsCard({ info }) {
  return (
    <div className={s.card}>
      <img
        className={s.poster}
        src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
        alt=""
      />
      <div className={s.info}>
        <h2>{info.original_title}</h2>
        <p>Vote average: {info.vote_average}</p>
        <h3>Overview</h3>
        <p>{info.overview}</p>
        <h4>Genres</h4>
        <p>
          {info.genres.map((genre) => (
            <span className={s.genre} key={genre.id}>
              {genre.name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default MovieDetailsCard;
