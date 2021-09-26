import React, { useEffect, useState } from "react";
import { getTreding } from "../../common/tmdb-api";
import { MovieList } from "../Movie";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await (await getTreding()).data;
      //console.log(data.results);
      setMovies(data.results);
    };

    getData();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MovieList items={movies} />
    </>
  );
}

export default HomePage;
