import axios from "axios";

const TMDB_KEY = "b3e695ce06698b15098252cc7d8c2c76";

const queries = {
  getTrendingQuery: () =>
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_KEY}`,
  getSearchQuery: (searchStr) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${searchStr}`,
  getMovieDetail: (id) =>
    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_KEY}&language=en-US`,
  getMovieCast: (id) =>
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_KEY}&language=en-US`,
};

export const getTreding = async () => {
  return await axios.get(queries.getTrendingQuery());
};

export const searchMovies = async (searchSrt) => {
  return await axios.get(queries.getSearchQuery(searchSrt));
};

export const getMovieDetail = async (id) => {
  return await axios.get(queries.getMovieDetail(id));
};

export const getMovieCast = async (id) => {
  return await axios.get(queries.getMovieCast(id));
};
