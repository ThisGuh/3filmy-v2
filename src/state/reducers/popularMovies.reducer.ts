import { AnyAction } from 'redux';
import {
  GET_POPULAR_MOVIES_INIT,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_ERROR,
} from 'state/actionTypes';

const initialState = {
  error: null,
  data: {
    results: [],
  },
  loading: false,
};

const popularMoviesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_INIT:
      return {
        ...state,
        loading: true,
      };
    case GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_POPULAR_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default popularMoviesReducer;
