import { AxiosPromise, all } from 'axios'
import { takeEvery } from 'redux-saga/effects'
import { getListPosts } from '../../axios/Api'

function* workerSaga() {
  const data: AxiosPromise = yield getListPosts()
  console.log(data)
}

function* watchClickSaga() {
  yield takeEvery('GET_POSTS', workerSaga)
}

export function* listPostsSaga() {
  yield all([watchClickSaga])
}

export default listPostsSaga
