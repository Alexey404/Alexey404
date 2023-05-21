import { AxiosPromise } from 'axios'
import { all, delay, fork, put, takeLatest } from 'redux-saga/effects'
import { getListPosts, getProfile } from '../../axios/Api'

function* workerSaga({ id }: any) {
  console.log('start get posts')

  yield put({ type: 'LOAD_POSTS' })

  yield delay(500)

  const listPost: AxiosPromise = yield getListPosts(id)
  const author: AxiosPromise = yield getProfile(id)

  yield put({ type: 'SET_POSTS', peyload: listPost })
  yield put({ type: 'SET_AUTOR', peyload: author })

  console.log('finish get posts')
}

function* watchPostsSaga() {
  yield takeLatest('GET_PROFILE', workerSaga)
}

export function* profileSaga() {
  yield all([fork(watchPostsSaga)])
}
