import { AnyAction } from 'redux';
import {
  SEARCH_MOVIES_INIT,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
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

const searchMoviesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SEARCH_MOVIES_INIT:
      return {
        ...initialState,
      };

    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
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
