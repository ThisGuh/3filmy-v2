import { AnyAction } from 'redux';
import {
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_ERROR,
} from 'state/actionTypes';

const initialState = {
  error: null,
  data: {
    results: [],
  },
};

const popularMoviesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_POPULAR_MOVIES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default popularMoviesReducer;
