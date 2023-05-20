import { AxiosPromise } from 'axios'
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects'
import { getListPosts } from '../../axios/Api'

function* workerSaga() {
  yield put({ type: 'LOAD_POSTS' })
  yield delay(1000)
  const data: AxiosPromise = yield call(getListPosts)
  console.log(data)
  yield put({ type: 'SET_POSTS', peyload: data })
}

function* watchLoadPostsSaga() {
  yield takeLatest('GET_POSTS', workerSaga)
}

export function* commentsSaga() {
  yield all([fork(watchLoadPostsSaga)])
}
