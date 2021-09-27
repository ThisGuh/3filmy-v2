import {
  GET_POPULAR_MOVIES_INIT,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_ERROR,
} from 'state/actionTypes';
import { MoviesType } from 'types/Movies';

type ErrorType = {
  message: string;
} | null;

export const getPopularMoviesInit = () => ({
  type: GET_POPULAR_MOVIES_INIT,
});

export const getPopularMoviesSuccess = (data: MoviesType) => ({
  type: GET_POPULAR_MOVIES_SUCCESS,
  payload: data,
});

export const getPopularMoviesError = (error: ErrorType) => ({
  type: GET_POPULAR_MOVIES_ERROR,
  payload: error,
});
