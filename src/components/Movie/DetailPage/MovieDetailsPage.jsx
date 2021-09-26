import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link, Route, useRouteMatch } from "react-router-dom";
import { getMovieDetail } from "../../../common/tmdb-api";
import Cast from "../../Cast/Cast";

function MovieDetailsPage(props) {
  console.log(props);

  const [info, setInfo] = useState(null);
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    //console.log("use effect");
    const getInfo = async (id) => {
      const data = await (await getMovieDetail(id)).data;
      console.log(data);

      setInfo(data);
    };

    getInfo(props.match.params.id);
  }, [props.match.params.id]);

  //console.log(info, props.match.params.id);

  const match = useRouteMatch();
  console.log(match);
  return (
    info && (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
          alt=""
        />
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
        <Link to={`${match.url}/cast`}>Cast</Link>
        <Route path={`${match.url}/cast`}>
          <Cast id={info.id} />
        </Route>
      </>
    )
  );
}

export default MovieDetailsPage;
