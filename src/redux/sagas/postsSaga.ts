import { AxiosPromise } from 'axios'
import { put, spawn, takeEvery } from 'redux-saga/effects'
import { getListPosts } from '../../axios/Api'
import {
  GET_POSTS
} from '../action/postAction'
import {
  errorPosts,
  loadPosts,
  postType,
  setPosts,
} from '../newRedusers/postsReducer'

export function* getPostSaga(id: number | null = null) {
  yield put(loadPosts())

  try {
    const listPost: AxiosPromise<Array<postType>> = yield getListPosts(id)
    yield put(setPosts(listPost as any))
  } catch {
    yield put(errorPosts())
  }
}

function* workerSaga() {
  yield spawn(getPostSaga)
}

function* watchPostsSaga() {
  yield takeEvery(GET_POSTS, workerSaga)
}

export function* listPostsSaga() {
  yield spawn(watchPostsSaga)
}
