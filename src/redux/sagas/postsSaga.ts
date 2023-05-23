import { AxiosPromise } from 'axios'
import { all, delay, spawn, put, takeEvery } from 'redux-saga/effects'
import { getListPosts } from '../../axios/Api'
import { GET_POSTS, LOAD_POSTS, SET_POSTS } from '../actions'
import { postType } from '../reducers/postsReducer'

export function* getPostSaga(id: number | null = null) {
  yield put({ type: LOAD_POSTS })
  yield delay(300)

  const listPost: AxiosPromise<Array<postType>> = yield getListPosts(id)
  yield put({ type: SET_POSTS, peyload: listPost })
}

function* workerSaga() {
  yield spawn(getPostSaga)
}

function* watchPostsSaga() {
  yield takeEvery(GET_POSTS, workerSaga)
}

export function* listPostsSaga() {
  yield all([spawn(watchPostsSaga)])
}
