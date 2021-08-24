import { useRouter } from 'next/router';
import _ from 'lodash';
import Layout from 'components/Layout';

function Movie() {
  const { query } = useRouter();

  return <Layout>{_.get(query, 'movie-title')}</Layout>;
}

export default Movie;
