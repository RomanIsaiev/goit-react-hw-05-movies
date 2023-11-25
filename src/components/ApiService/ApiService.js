import axios from 'axios';

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGQzYjM3NjJjNjFkMmVmNDc5ZDA2MzRiYWY0ZTViZiIsInN1YiI6IjY1NWZiYzhiOTJlNTViMDBhY2FmZmE3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bl8cqM_r4GNcw9sxGDSgqJJg5NQZK9yVoEpC7bP8rg4';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = API_KEY;

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/all/day?language=en-US`);
  return data.results;
};

export const getMovie = async search => {
  const { data } = await axios.get(
    `search/movie?query=${search}&include_adult=false&language=en-US&page=1`
  );
  return data;
};

export const getMovieById = async id => {
  const response = await axios.get(`movie/${id}?language=en-US`);
  return response;
};

export const getMovieCastById = async id => {
  const response = await axios.get(`movie/${id}/credits?language=en-US`);
  console.log(response);
  return response.data.cast;
};

export const getMovieReviewsById = async id => {
  const response = await axios.get(`movie/${id}/reviews?language=en-US`);
  console.log(response);
  return response.data;
};
