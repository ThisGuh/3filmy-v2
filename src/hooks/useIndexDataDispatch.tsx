import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getPopularMoviesInit,
  getPopularMoviesSuccess,
  getPopularMoviesError,
} from 'state/actions/popularMovies.actions';
import { MoviesType } from 'types/Movies';

const useIndexDataDispatch = (popularMovies: MoviesType, error: boolean) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMoviesInit());
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
