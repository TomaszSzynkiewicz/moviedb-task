import {
  GET_MOVIE_DETAILS_REQUESTED,
  GET_MOVIE_DETAILS_DONE,
  GET_MOVIE_DETAILS_FAILED
} from '../actions';

export const INITIAL_STATE = {
  loading: false,
  id: null,
  movie: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS_REQUESTED:
      return {
        ...INITIAL_STATE,
        loading: true
      };
    case GET_MOVIE_DETAILS_DONE:
      return {
        ...state,
        loading: false,
        movie: {
          genres: action.payload.genres,
          overview: action.payload.overview,
          posterPath: action.payload.poster_path,
          title: action.payload.title,
          releaseDate: action.payload.release_date,
          voteAverage: action.payload.vote_average,
          voteCount: action.payload.vote_count
        }
      };
    case GET_MOVIE_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        movie: null,
        error: action.payload
      };
    default:
      return state;
  }
};
