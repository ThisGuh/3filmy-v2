import { InferGetStaticPropsType } from 'next';
import axios from 'axios';
import Layout from 'components/Layout';
import MainContent from 'components/MainContent';
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
    .catch(() => ({
      popularMovies: null,
      error: true,
    }));

function Home({
  popularMovies,
  error,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  useIndexDataDispatch(popularMovies, error);

  return (
    <Layout>
      <MainContent />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const data = await indexPageData();

  return {
    props: {
      ...data,
    },
  };
};

export default Home;
