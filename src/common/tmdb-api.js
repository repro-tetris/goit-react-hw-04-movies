import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";

axios.defaults.params = {
  api_key: "b3e695ce06698b15098252cc7d8c2c76",
};

const queries = {
  getTrendingQuery: () => `${BASE_URL}trending/movie/day`,
  getSearchQuery: (searchStr) =>
    `${BASE_URL}search/movie?language=en-US&page=1&include_adult=false&query=${searchStr}`,
  getMovieDetail: (id) => `${BASE_URL}movie/${id}?language=en-US`,
  getMovieCast: (id) => `${BASE_URL}movie/${id}/credits?language=en-US`,
  getMovieReview: (id) => `${BASE_URL}movie/${id}/reviews?language=en-US`,
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

export const getMovieReview = async (id) => {
  return await axios.get(queries.getMovieReview(id));
};
