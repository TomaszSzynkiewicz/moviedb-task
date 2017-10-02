import {
  GET_MOVIE_DETAILS_REQUESTED,
  getMovieDetailsRequested,
  GET_MOVIE_DETAILS_DONE,
  getMovieDetailsDone,
  GET_MOVIE_DETAILS_FAILED,
  getMovieDetailsFailed
} from './movieActions';

describe('movieActions', () => {
  it('should create an action with movie id as payload', () => {
    const id = 123456;
    expect(getMovieDetailsRequested(id)).toEqual({
      type: GET_MOVIE_DETAILS_REQUESTED,
      payload: { id }
    });
  });

  it('should create an action with data as payload', () => {
    const data = {};

    expect(getMovieDetailsDone(data)).toEqual({
      type: GET_MOVIE_DETAILS_DONE,
      payload: data
    });
  });

  it('should create an action with error as payload', () => {
    const error = 'Oops!';

    expect(getMovieDetailsFailed(error)).toEqual({
      type: GET_MOVIE_DETAILS_FAILED,
      payload: error
    });
  });
});
