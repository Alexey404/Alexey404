import { AxiosPromise } from 'axios'
import { put, spawn, takeEvery } from 'redux-saga/effects'
import { getComments } from '../../axios/Api'
import { GET_COMMENTS } from '../action/postAction'

import {
  commentsType,
  errorComments,
  loadComments,
  setComments,
} from '../newRedusers/postsReducer'

function* workerSaga({ id }: any) {
  yield put(loadComments(id))

  try {
    const data: AxiosPromise<commentsType> = yield getComments(id)
    const payload: any = { data, id }
    yield put(setComments(payload))
  } catch {
    yield put(errorComments(id))
  }
}

function* watchLoadPostsSaga() {
  yield takeEvery(GET_COMMENTS, workerSaga)
}

export function* commentsSaga() {
  yield spawn(watchLoadPostsSaga)
}
