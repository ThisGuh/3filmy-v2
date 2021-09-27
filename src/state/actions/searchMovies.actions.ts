import {
  SEARCH_MOVIES_INIT,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
} from 'state/actionTypes';
import { MoviesType } from 'types/Movies';

type ErrorType = {
  message: string;
} | null;

export const searchMoviesInit = () => ({ type: SEARCH_MOVIES_INIT });
export const searchMoviesSuccess = (data: MoviesType) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: data,
});
export const searchMoviesError = (error: ErrorType) => ({
  type: SEARCH_MOVIES_ERROR,
  payload: error,
});
