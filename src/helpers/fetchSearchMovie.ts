import axios from 'axios';

const fetchSearchMovie = (phrase: string) =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&language=pl-PL&query=${phrase}`
  );

export default fetchSearchMovie;
