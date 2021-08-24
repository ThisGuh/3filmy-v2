import { AnyAction } from 'redux';
import { TOGGLE_SEARCH_MODAL } from 'state/actionTypes';

const searchModalReducer = (state = false, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_SEARCH_MODAL:
      return !state;
    default:
      return state;
  }
};

export default searchModalReducer;
