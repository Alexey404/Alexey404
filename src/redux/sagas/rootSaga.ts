import { all, spawn } from 'redux-saga/effects'
import { listPostsSaga } from './postsSaga'
import { commentsSaga } from './commentsSaga'
import { profileSaga } from './profileSaga'

export function* rootSaga() {
  yield all([spawn(listPostsSaga), spawn(commentsSaga), spawn(profileSaga)])
}
