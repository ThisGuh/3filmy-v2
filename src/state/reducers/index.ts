import { combineReducers } from 'redux';
import burgerReducer from 'state/reducers/burger.reducer';

const reducers = {
  isBurger: burgerReducer,
};

const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
