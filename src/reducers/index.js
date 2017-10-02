import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import movieSearch from './movieSearchReducer';

export default combineReducers({
  form,
  movieSearch
});
