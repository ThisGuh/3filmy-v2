import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getPopularMoviesSuccess,
  getPopularMoviesError,
} from 'state/actions/popularMovies.actions';
import { PopularMoviesType } from 'types/PopularMovies';

const useIndexDataDispatch = (
  popularMovies: PopularMoviesType,
  error: boolean
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!error) {
      dispatch(getPopularMoviesSuccess(popularMovies));
    } else {
      dispatch(
        getPopularMoviesError({
          message: 'Oops! Something go wrong, try again!',
        })
      );
    }
  }, [dispatch, popularMovies, error]);
};

export default useIndexDataDispatch;
