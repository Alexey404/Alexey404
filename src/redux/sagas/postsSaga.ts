import { AxiosPromise } from 'axios'
import { put, spawn, takeEvery } from 'redux-saga/effects'
import { getListPosts } from '../../axios/Api'
import {
  ERROR_POSTS,
  GET_POSTS,
  LOAD_POSTS,
  SET_POSTS,
} from '../action/postAction'
import { postType } from '../reducers/postsReducer'

export function* getPostSaga(id: number | null = null) {
  yield put({ type: LOAD_POSTS })

  try {
    const listPost: AxiosPromise<Array<postType>> = yield getListPosts(id)
    yield put({ type: SET_POSTS, peyload: listPost })
  } catch {
    yield put({ type: ERROR_POSTS })
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
