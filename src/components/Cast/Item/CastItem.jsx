import React from "react";
import { FcManager } from "react-icons/fc";

function CastItem({ item: { name, character, profile_path } }) {
  return (
    <li>
      {profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          width="100"
          alt={name}
        />
      ) : (
        <FcManager size="100" />
      )}
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
}

export default CastItem;
