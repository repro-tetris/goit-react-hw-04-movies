import React from "react";
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { getMovieCast } from "../../common/tmdb-api";
import { CastList } from "../Cast";
import Loading from "../Loading/Loading";

function Cast({ id }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getCast = async (id) => {
      const data = await (await getMovieCast(id)).data;

      setCast(data.cast);
    };

    getCast(id);
  }, [id]);

  return (
    <>
      {!cast && <Loading />}
      {cast && <CastList items={cast} />}
    </>
  );
}

Cast.propTypes = {
  id: PropTypes.number,
};

export default Cast;
