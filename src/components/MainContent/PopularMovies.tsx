import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'state/reducers';
import useDesktopMediaQuery from 'hooks/useDesktopMediaQuery';
import {
  DESKTOP_POPULAR_MOVIES_AMOUNT,
  MOBILE_POPULAR_MOVIES_AMOUNT,
} from 'utils/constants';
import {
  Wrapper,
  SectionTitle,
  Movies,
  MovieWrapper,
  MovieImageWrapper,
  StyledImage,
  IMAGE_MOVIE_WIDTH,
  IMAGE_MOVIE_HEIGHT,
} from './PopularMovies.style';

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
      <Movies>
        {popularMovies.data.results.map(
          ({ title = '', poster_path = '' }, index: number) =>
            index <= moviesAmount - 1 ? (
              <Link
                href={`/filmy/${title.toLowerCase().replace(/ /g, '-')}`}
                passHref
                key={title}
              >
                <a>
                  <MovieWrapper>
                    <MovieImageWrapper>
                      <StyledImage
                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        width={IMAGE_MOVIE_WIDTH}
                        height={IMAGE_MOVIE_HEIGHT}
                        alt={title}
                      />
                    </MovieImageWrapper>
                    <p>{title}</p>
                  </MovieWrapper>
                </a>
              </Link>
            ) : null
        )}
      </Movies>
    </Wrapper>
  );
}

export default PopularMovies;
