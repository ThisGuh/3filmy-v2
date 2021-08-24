import { combineReducers } from 'redux';
import burgerReducer from 'state/reducers/burger.reducer';
import popularMoviesReducer from 'state/reducers/popularMovies.reducer';
import searchModalReducer from 'state/reducers/searchModal.reducer';
import searchMoviesReducer from 'state/reducers/searchMovies.reducer';

const reducers = {
  isBurger: burgerReducer,
  getPopularMovies: popularMoviesReducer,
  isSearchModal: searchModalReducer,
  searchMovies: searchMoviesReducer,
};

const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
