import React, { useState, useEffect } from "react";
import { MovieList } from "..";
import { searchMovies } from "../../../common/tmdb-api";
import { SearchForm } from "../../Search";

const PARAMS = {
  QUERY: "query",
};

function MoviesPage(props) {
  const [movies, setMovies] = useState([]);
  const [searchStr, setSearchStr] = useState(() => {
    const params = new URLSearchParams(props.location.search);
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
    props.history.push({
      pathname: props.location.pathname,
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
