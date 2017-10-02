import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import movieSearch from './movieSearchReducer';
import movie from './movieReducer';

export default combineReducers({
  form,
  movieSearch,
  movie
});
