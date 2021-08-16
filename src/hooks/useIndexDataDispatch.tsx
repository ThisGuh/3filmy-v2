import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getPopularMoviesSuccess,
  getPopularMoviesError,
} from 'state/actions/popularMovies.actions';
import { PopularMoviesType } from 'types/PopularMovies';

const useIndexDataDispatch = (popularMovies: PopularMoviesType, error: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!error) {
      dispatch(getPopularMoviesSuccess(popularMovies));
    } else {
      dispatch(
        getPopularMoviesError({
          message: error,
        })
      );
    }
  }, [dispatch, popularMovies, error]);
};

export default useIndexDataDispatch;
