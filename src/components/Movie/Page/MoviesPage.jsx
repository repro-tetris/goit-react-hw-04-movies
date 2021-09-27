import React, { useState, useEffect } from "react";
import { MovieList } from "..";
import { searchMovies } from "../../../common/tmdb-api";
import { SearchForm } from "../../Search";

const PARAMS = {
  QUERY: "query",
};

function MoviesPage({ location, history }) {
  const [movies, setMovies] = useState([]);
  const [searchStr, setSearchStr] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.has(PARAMS.QUERY) ? params.get(PARAMS.QUERY) : null;
  });

  useEffect(() => {
    const getMovies = async () => {
      const data = await (await searchMovies(searchStr)).data;
      setMovies(data.results);
    };
    if (searchStr) getMovies();
  }, [searchStr]);

  const onSearch = (searchStr) => {
    history.push({
      pathname: location.pathname,
      search: `${PARAMS.QUERY}=${searchStr}`,
    });
    setSearchStr(searchStr);
  };

  return (
    <div>
      <SearchForm onSubmit={onSearch} />
      {searchStr && <MovieList items={movies} />}
    </div>
  );
}

export default MoviesPage;
