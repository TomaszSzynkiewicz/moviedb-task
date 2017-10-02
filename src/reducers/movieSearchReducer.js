import {
  FIND_MOVIE_REQUESTED,
  FIND_MOVIE_DONE,
  FIND_MOVIE_FAILED
} from '../actions';

export const INITIAL_STATE = {
  loading: false,
  title: '',
  error: '',
  results: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIND_MOVIE_REQUESTED:
      return {
        ...INITIAL_STATE,
        loading: true,
        title: action.payload.title
      };
    case FIND_MOVIE_DONE: {
      return { ...state, loading: false, results: action.payload.results };
    }
    case FIND_MOVIE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
