import React, { useState, useEffect } from "react";
import { MovieList } from "..";
import { searchMovies } from "../../../common/tmdb-api";
import { SearchForm } from "../../Search";

function MoviesPage() {
  const [searchStr, setSearchStr] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await (await searchMovies(searchStr)).data;
      //console.log(data);
      setMovies(data.results);
    };
    if (searchStr) getMovies();
  }, [searchStr]);

  const onSearch = (searchStr) => {
    setSearchStr(searchStr);
  };

  return (
    <div>
      <SearchForm onSubmit={onSearch} />
      <MovieList items={movies} />
    </div>
  );
}

export default MoviesPage;
