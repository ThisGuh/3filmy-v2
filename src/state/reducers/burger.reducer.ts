import { TOGGLE_HAMBURGER } from 'state/actionTypes';

type Action = {
  type: string;
};

const burgerReducer = (state = true, { type }: Action) => {
  switch (type) {
    case TOGGLE_HAMBURGER:
      return !state;
    default:
      return state;
  }
};

export default burgerReducer;
