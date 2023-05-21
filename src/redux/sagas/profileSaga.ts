import { AxiosPromise } from 'axios'
import { all, delay, fork, put, takeLatest } from 'redux-saga/effects'
import { getListPosts, getProfile } from '../../axios/Api'
import {
  GET_PROFILE,
  GetProfileAction,
  LOAD_AUTOR,
  LOAD_POSTS,
  SET_AUTOR,
  SET_POSTS,
} from '../actions'
import { authorType, postType } from '../reducers/postsReducer'

function* workerSaga({ id }: GetProfileAction) {
  yield put({ type: LOAD_POSTS })
  yield put({ type: LOAD_AUTOR })
  yield delay(300)

  const listPost: AxiosPromise<Array<postType>> = yield getListPosts(id)
  const author: AxiosPromise<authorType> = yield getProfile(id)

  yield put({ type: SET_POSTS, peyload: listPost })
  yield put({ type: SET_AUTOR, peyload: author })
}

function* watchPostsSaga() {
  yield takeLatest(GET_PROFILE, workerSaga)
}

export function* profileSaga() {
  yield all([fork(watchPostsSaga)])
}
