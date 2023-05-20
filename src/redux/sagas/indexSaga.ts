import { all, fork } from 'redux-saga/effects'
import { listPostsSaga } from './sagaPosts'

export function* rootSaga() {
  yield all([fork(listPostsSaga)])
}
