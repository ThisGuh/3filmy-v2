import { InferGetStaticPropsType } from 'next';
import axios from 'axios';
import Layout from 'components/Layout';
import MainContent from 'components/MainContent';
import fetchPopularMovies from 'helpers/fetchPopularMovies';
import { MoviesType } from 'types/Movies';
import useIndexDataDispatch from 'hooks/useIndexDataDispatch';

const indexPageData = () =>
  axios
    .all([fetchPopularMovies()])
    .then(
      axios.spread(popularMoviesResponse => {
        const popularMovies: MoviesType = popularMoviesResponse.data;
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
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useIndexDataDispatch(popularMovies, error);

  return (
    <Layout>
      <MainContent />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await indexPageData();

  return {
    props: {
      ...data,
    },
    revalidate: 60,
  };
};

export default Home;
