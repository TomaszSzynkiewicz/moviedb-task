import {
  takeLatest,
  put
} from 'redux-saga/effects';

import {
  FIND_MOVIE_REQUESTED,
  findMovieDone,
  findMovieFailed
} from '../actions';

import movieApi from '../api/movieApi';

function* findMovie({ payload: { title } }) {
  try {
    const res = yield movieApi.find({ title });
    yield put(findMovieDone(res.data));
  } catch (err) {
    yield put(findMovieFailed(err));
  }
}

export default [
  takeLatest(FIND_MOVIE_REQUESTED, findMovie)
];
