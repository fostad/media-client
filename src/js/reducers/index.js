import { combineReducers } from 'redux';
import popularMovies from './popular-movies';
import topRateds from './top-rateds';
import settings from './settings';

const reducer = combineReducers({
  popularMovies,
  topRateds,
  settings
});


export default reducer;
