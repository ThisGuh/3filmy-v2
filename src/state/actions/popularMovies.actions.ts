import {
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_ERROR,
} from 'state/actionTypes';
import { PopularMoviesType } from 'types/PopularMovies';

type ErrorType = {
  message: string;
} | null;

export const getPopularMoviesSuccess = (data: PopularMoviesType) => ({
  type: GET_POPULAR_MOVIES_SUCCESS,
  payload: data,
});

export const getPopularMoviesError = (error: ErrorType) => ({
  type: GET_POPULAR_MOVIES_ERROR,
  payload: error,
});
