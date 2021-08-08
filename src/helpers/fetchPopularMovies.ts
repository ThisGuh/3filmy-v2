import axios from 'axios';

const fetchPopularMovies = () =>
  axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&language=pl-PL&page=1`
  );

export default fetchPopularMovies;
