import React from "react";
import { FcLeft } from "react-icons/fc";
import { useState, useEffect } from "react";
import { getMovieDetail } from "../../../../common/tmdb-api";
import { MovieDetailsCard } from "../../../Movie";
import s from "./MovieDetailsPage.module.css";
import AdditionalInfo from "../../AdditionalInfo/AdditionalInfo";

function MovieDetailsPage(props) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const getInfo = async (id) => {
      const data = await (await getMovieDetail(id)).data;
      setInfo(data);
    };

    getInfo(props.match.params.id);
  }, [props.match.params.id]);

  const handleGoBackButton = () => {
    props.history.goBack();
  };

  return (
    info && (
      <>
        <button className={s.btn} onClick={handleGoBackButton}>
          <FcLeft size="20" />
          Go back
        </button>
        <MovieDetailsCard info={info} />
        <AdditionalInfo id={info.id} />
      </>
    )
  );
}

export default MovieDetailsPage;
