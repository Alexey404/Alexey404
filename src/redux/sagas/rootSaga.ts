import { all, fork } from 'redux-saga/effects'
import { listPostsSaga } from './postsSaga'
import { commentsSaga } from './commentsSaga'
import { profileSaga } from './profileSaga'

export function* rootSaga() {
  yield all([fork(listPostsSaga), fork(commentsSaga), fork(profileSaga)])
}
