import React, { useEffect, useState } from "react";
import { getTreding } from "../../common/tmdb-api";
import Loading from "../Loading/Loading";
import { MovieList } from "../Movie";

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await (await getTreding()).data;
      setMovies(data.results);
    };

    getData();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {!movies && <Loading />}
      {movies && <MovieList items={movies} />}
    </>
  );
}

export default HomePage;
