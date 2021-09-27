import { AnyAction } from 'redux';
import {
  GET_POPULAR_MOVIES_INIT,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_POPULAR_MOVIES_ERROR,
} from 'state/actionTypes';

type InitialState = {
  error: { message: string } | null;
  data: {
    results: [
      { title: string; poster_path: string; id: number; release_date: string }
    ];
  };
  loading: boolean;
};

const initialState: InitialState = {
  error: null,
  data: { results: [{ title: '', poster_path: '', id: 0, release_date: '' }] },
  loading: true,
};

const popularMoviesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_INIT:
      return {
        ...initialState,
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
