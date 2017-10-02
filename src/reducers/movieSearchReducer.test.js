// import React from 'react';
// import { mount } from 'enzyme';
import movieSearchReducer, { INITIAL_STATE } from './movieSearchReducer';
import {
  FIND_MOVIE_REQUESTED,
  FIND_MOVIE_DONE,
  FIND_MOVIE_FAILED
} from '../actions';

describe('movieReducer', () => {
  it('return the initial state', () => {
    expect(movieSearchReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('sets search title', () => {
    expect(movieSearchReducer(undefined, {
      type: FIND_MOVIE_REQUESTED,
      payload: { title: 'Green mile' }
    })).toEqual({ ...INITIAL_STATE, loading: true, title: 'Green mile' });
  });

  it('populate results - empty list', () => {
    expect(movieSearchReducer(undefined, {
      type: FIND_MOVIE_DONE,
      payload: { results: [] }
    })).toEqual({ ...INITIAL_STATE, results: [] });
  });

  it('populate results - non-empty list', () => {
    const sampleResultItem = {
      title: 'Green mile',
      overview: 'Lorem ipsum...'
    };
    expect(movieSearchReducer(undefined, {
      type: FIND_MOVIE_DONE,
      payload: { results: [sampleResultItem] }
    })).toEqual({ ...INITIAL_STATE, results: [sampleResultItem] });
  });

  it('populate error', () => {
    expect(movieSearchReducer(undefined, {
      type: FIND_MOVIE_FAILED,
      payload: 'Error occurred'
    })).toEqual({ ...INITIAL_STATE, error: 'Error occurred' });
  });
});
