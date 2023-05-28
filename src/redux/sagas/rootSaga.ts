import { all, spawn } from 'redux-saga/effects'
import { listPostsSaga } from './postsSaga'
import { commentsSaga } from './commentsSaga'
import { profileSaga } from './profileSaga'
import { myProfileSaga } from './myProfileSaga'

export function* rootSaga() {
  yield all([
    spawn(listPostsSaga),
    spawn(commentsSaga),
    spawn(profileSaga),
    spawn(myProfileSaga),
  ])
}
