import { AnyAction } from 'redux';
import {
  SEARCH_MOVIES_INIT,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
} from 'state/actionTypes';

const initialState = {
  error: null,
  data: {
    results: [],
  },
  loading: true,
};

const searchMoviesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SEARCH_MOVIES_INIT:
      return {
        ...initialState,
      };

    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };

    case SEARCH_MOVIES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default searchMoviesReducer;
