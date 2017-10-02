import {
  FIND_MOVIE_REQUESTED,
  findMovieRequested,
  FIND_MOVIE_DONE,
  findMovieDone,
  FIND_MOVIE_FAILED,
  findMovieFailed
} from './movieSearchActions';

describe('movieSearchActions', () => {
  it('should create an action with movie title as payload', () => {
    const title = 'Superman';
    expect(findMovieRequested(title)).toEqual({
      type: FIND_MOVIE_REQUESTED,
      payload: { title }
    });
  });

  it('should create an action with data as payload', () => {
    const data = {};

    expect(findMovieDone(data)).toEqual({
      type: FIND_MOVIE_DONE,
      payload: data
    });
  });

  it('should create an action with error as payload', () => {
    const error = 'Oops!';

    expect(findMovieFailed(error)).toEqual({
      type: FIND_MOVIE_FAILED,
      payload: error
    });
  });
});
