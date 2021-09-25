import { useSelector } from 'react-redux';
import { RootState } from 'state/reducers';
import useDesktopMediaQuery from 'hooks/useDesktopMediaQuery';
import {
  DESKTOP_POPULAR_MOVIES_AMOUNT,
  MOBILE_POPULAR_MOVIES_AMOUNT,
} from 'utils/constants';
import Movies from 'components/Movies';
import { Wrapper, SectionTitle } from './PopularMovies.style';

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
