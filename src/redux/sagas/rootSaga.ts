import { all, fork } from 'redux-saga/effects'
import { listPostsSaga } from './sagaPosts'
import { commentsSaga } from './commentsSaga'
import { profileSaga } from './sagaProfile'

export function* rootSaga() {
  yield all([fork(listPostsSaga), fork(commentsSaga), fork(profileSaga)])
}
