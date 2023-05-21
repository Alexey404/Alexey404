import { AxiosPromise } from 'axios'
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects'
import { getListPosts } from '../../axios/Api'

function* workerSaga() {
  console.log('start get posts')

  yield put({ type: 'LOAD_POSTS' })
  yield delay(500)

  const data: AxiosPromise = yield getListPosts(null)

  yield put({ type: 'SET_POSTS', peyload: data })

  console.log('finish get posts')
}

function* watchPostsSaga() {
  yield takeLatest('GET_POSTS', workerSaga)
}

export function* listPostsSaga() {
  yield all([fork(watchPostsSaga)])
}
