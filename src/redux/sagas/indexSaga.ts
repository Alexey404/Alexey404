import { all, fork } from 'redux-saga/effects'
import { listPostsSaga } from './sagaPosts'
import { commentsSaga } from './commentsSaga'

export function* rootSaga() {
  yield all([fork(listPostsSaga), fork(commentsSaga)])
}
