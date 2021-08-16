import { InferGetStaticPropsType } from 'next';
import axios from 'axios';
import Layout from 'components/Layout';
import fetchPopularMovies from 'helpers/fetchPopularMovies';
import { PopularMoviesType } from 'types/PopularMovies';
import useIndexDataDispatch from 'hooks/useIndexDataDispatch';

const indexPageData = () =>
  axios
    .all([fetchPopularMovies()])
    .then(
      axios.spread(popularMoviesResponse => {
        const popularMovies: PopularMoviesType = popularMoviesResponse.data;
        return {
          popularMovies,
          error: false,
        };
      })
    )
    .catch(error => ({
      popularMovies: null,
      error: error.response.status,
    }));

function Home({
  popularMovies,
  error,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useIndexDataDispatch(popularMovies, error);

  return <Layout />;
}

export const getStaticProps = async () => {
  const data = await indexPageData();

  return {
    props: {
      ...data,
    },
  };
};

export default Home;
