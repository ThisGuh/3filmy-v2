import { combineReducers } from 'redux';
import burgerReducer from 'state/reducers/burger.reducer';
import popularMoviesReducer from 'state/reducers/popularMovies.reducer';

const reducers = {
  isBurger: burgerReducer,
  getPopularMovies: popularMoviesReducer,
};

const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
