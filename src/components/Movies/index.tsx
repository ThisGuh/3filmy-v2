import Link from 'next/link';
import _ from 'lodash';
import {
  Wrapper,
  MovieImageWrapper,
  MovieWrapper,
  StyledImage,
  MOVIE_IMAGE_WIDTH,
  MOVIE_IMAGE_HEIGHT,
} from './Movies.style';

type Props = {
  moviesData: {
    data: {
      results: [
        {
          title: string;
          poster_path: string;
          id: number;
          release_date: string;
        }
      ];
    };
  };
  moviesAmount: number;
};

const adjustMovieTitleForUrl = (movieTitle: string) =>
  movieTitle.toLowerCase().replace(/ /g, '-');

const sortData = ({ moviesData }: Omit<Props, 'moviesAmount'>) => {
  const { data } = moviesData;
  return _.orderBy(data.results, ['popularity'], 'desc');
};

function Movies({ moviesData, moviesAmount }: Props) {
  const sortedData = sortData({ moviesData });

  return (
    <Wrapper>
      {sortedData.map(({ title, poster_path, id }, index: number) => {
        if (index <= moviesAmount - 1 && poster_path) {
          return (
            <Link
              href={`/filmy/${adjustMovieTitleForUrl(title)}`}
              passHref
              key={id}
            >
              <a>
                <MovieWrapper>
                  <MovieImageWrapper>
                    <StyledImage
                      src={`https://image.tmdb.org/t/p/original${poster_path}`}
                      width={MOVIE_IMAGE_WIDTH}
                      height={MOVIE_IMAGE_HEIGHT}
                      alt={title}
                    />
                  </MovieImageWrapper>
                  <p>{title}</p>
                </MovieWrapper>
              </a>
            </Link>
          );
        }
        return null;
      })}
    </Wrapper>
  );
}

export default Movies;
