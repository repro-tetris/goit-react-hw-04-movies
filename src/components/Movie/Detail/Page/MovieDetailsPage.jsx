import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link, Route, useRouteMatch } from "react-router-dom";
import { getMovieDetail } from "../../../../common/tmdb-api";
import { Cast } from "../../../Cast";
import Reviews from "../../../Reviews/Reviews";
import { MovieDetailsCard } from "../../../Movie";

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

  const handleGoBackButton = () => {
    props.history.goBack();
  };

  const match = useRouteMatch();

  return (
    info && (
      <>
        <button onClick={handleGoBackButton}>Go back</button>
        <MovieDetailsCard info={info} />

        <Link to={`${match.path}/cast`}>Cast</Link>
        <Route path={`${match.path}/cast`}>
          <Cast id={info.id} />
        </Route>

        <Link to={`${match.path}/reviews`}>Review</Link>
        <Route path={`${match.path}/reviews`}>
          <Reviews id={info.id} />
        </Route>
      </>
    )
  );
}

export default MovieDetailsPage;
