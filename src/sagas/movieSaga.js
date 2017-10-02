import {
  takeLatest,
  put
} from 'redux-saga/effects';

import {
  GET_MOVIE_DETAILS_REQUESTED,
  getMovieDetailsDone,
  getMovieDetailsFailed
} from '../actions';

import movieApi from '../api/movieApi';

function* getMovieDetails({ payload: { id } }) {
  try {
    const res = yield movieApi.getDetails({ id });
    yield put(getMovieDetailsDone(res.data));
  } catch (err) {
    yield put(getMovieDetailsFailed(err));
  }
}

export default [
  takeLatest(GET_MOVIE_DETAILS_REQUESTED, getMovieDetails)
];
