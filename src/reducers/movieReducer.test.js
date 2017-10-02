// import React from 'react';
// import { mount } from 'enzyme';
import movieReducer, { INITIAL_STATE } from './movieReducer';
import {
  GET_MOVIE_DETAILS_REQUESTED,
  GET_MOVIE_DETAILS_DONE,
  GET_MOVIE_DETAILS_FAILED
} from '../actions';

describe('movieReducer', () => {
  it('return the initial state', () => {
    expect(movieReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('sets requested movie id', () => {
    expect(movieReducer(undefined, {
      type: GET_MOVIE_DETAILS_REQUESTED
    })).toEqual({
      ...INITIAL_STATE,
      loading: true
    });
  });

  it('sets movie', () => {
    expect(movieReducer(undefined, {
      type: GET_MOVIE_DETAILS_DONE,
      payload: {
        genres: [],
        overview: 'Lorem ipsum...',
        poster_path: 'path/url/image.jpg',
        title: 'Some title',
        release_date: '2016-02-19',
        vote_average: '5.3',
        vote_count: '1231'
      }
    })).toEqual({
      ...INITIAL_STATE,
      loading: false,
      movie: {
        genres: [],
        overview: 'Lorem ipsum...',
        posterPath: 'path/url/image.jpg',
        title: 'Some title',
        releaseDate: '2016-02-19',
        voteAverage: '5.3',
        voteCount: '1231'
      }
    });
  });

  it('populate error', () => {
    expect(movieReducer(undefined, {
      type: GET_MOVIE_DETAILS_FAILED,
      payload: 'Error occurred'
    })).toEqual({ ...INITIAL_STATE, error: 'Error occurred' });
  });
});
