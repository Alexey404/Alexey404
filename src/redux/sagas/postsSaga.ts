import { AxiosPromise } from 'axios'
import { all, delay, fork, put, takeLatest } from 'redux-saga/effects'
import { getListPosts } from '../../axios/Api'
import { GET_POSTS, LOAD_POSTS, SET_POSTS } from '../actions'
import { postType } from '../reducers/postsReducer'

function* workerSaga() {
  yield put({ type: LOAD_POSTS })
  yield delay(300)

  const listPosts: AxiosPromise<Array<postType>> = yield getListPosts(null)

  yield put({ type: SET_POSTS, peyload: listPosts })
}

function* watchPostsSaga() {
  yield takeLatest(GET_POSTS, workerSaga)
}

export function* listPostsSaga() {
  yield all([fork(watchPostsSaga)])
}
