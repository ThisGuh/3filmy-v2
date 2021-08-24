import {
  SEARCH_MOVIES_INIT,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
} from 'state/actionTypes';

export const searchMoviesInit = () => ({ type: SEARCH_MOVIES_INIT });
export const searchMoviesSuccess = data => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload: data,
});
export const searchMoviesError = error => ({
  type: SEARCH_MOVIES_ERROR,
  payload: error,
});
