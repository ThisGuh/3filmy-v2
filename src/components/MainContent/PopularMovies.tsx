import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { RootState } from 'state/reducers';
import useDesktopMediaQuery from 'hooks/useDesktopMediaQuery';
import {
  DESKTOP_POPULAR_MOVIES_AMOUNT,
  MOBILE_POPULAR_MOVIES_AMOUNT,
} from 'utils/constants';
import Spinner from 'components/Spinner';
import { Wrapper, SectionTitle } from './PopularMovies.style';

const renderSpinner = () => <Spinner />;

const Movies = dynamic(() => import('components/Movies'), {
  loading: renderSpinner,
});

function PopularMovies() {
  const popularMovies = useSelector(
    (state: RootState) => state.getPopularMovies
  );
  const moviesAmount = useDesktopMediaQuery()
    ? DESKTOP_POPULAR_MOVIES_AMOUNT
    : MOBILE_POPULAR_MOVIES_AMOUNT;

  return (
    <Wrapper>
      <SectionTitle>Popularne</SectionTitle>
      <Movies moviesData={popularMovies} moviesAmount={moviesAmount} />
    </Wrapper>
  );
}

export default PopularMovies;
