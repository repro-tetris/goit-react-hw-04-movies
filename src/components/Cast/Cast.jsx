import React from "react";
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { getMovieCast } from "../../common/tmdb-api";
import { CastList } from "../Cast";

function Cast({ id }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async (id) => {
      const data = await (await getMovieCast(id)).data;

      setCast(data.cast);
    };

    getCast(id);
  }, [id]);

  return <CastList items={cast} />;
}

Cast.propTypes = {
  id: PropTypes.number,
};

export default Cast;
