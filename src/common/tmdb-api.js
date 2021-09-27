import axios from "axios";
const API_KEY = "b3e695ce06698b15098252cc7d8c2c76";
const BASE_URL = "https://api.themoviedb.org/3";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
};

export const getTreding = async () => {
  return await axios.get("/trending/movie/day");
};

export const searchMovies = async (searchStr) => {
  return await axios.get(
    `/search/movie?include_adult=false&query=${searchStr}`
  );
};

export const getMovieDetail = async (id) => {
  return await axios.get(`/movie/${id}`);
};

export const getMovieCast = async (id) => {
  return await axios.get(`/movie/${id}/credits`);
};

export const getMovieReview = async (id) => {
  return await axios.get(`/movie/${id}/reviews`);
};
