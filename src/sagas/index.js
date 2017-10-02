import {
  all
} from 'redux-saga/effects';

import movieSearchSaga from './movieSearchSaga';
import movieSaga from './movieSaga';

export default function* rootSaga() {
  yield all([
    ...movieSearchSaga,
    ...movieSaga
  ]);
}
