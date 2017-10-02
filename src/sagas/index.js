import {
  all
} from 'redux-saga/effects';

import movieSearchSaga from './movieSearchSaga';

export default function* rootSaga() {
  yield all([
    ...movieSearchSaga
  ]);
}
