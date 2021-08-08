import { AnyAction } from 'redux';
import { TOGGLE_HAMBURGER } from 'state/actionTypes';

const burgerReducer = (state = true, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_HAMBURGER:
      return !state;
    default:
      return state;
  }
};

export default burgerReducer;
