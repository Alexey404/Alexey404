import { AxiosPromise } from 'axios'
import { put, spawn, takeEvery } from 'redux-saga/effects'
import { getComments } from '../../axios/Api'
import {
  ERROR_COMMENTS,
  GET_COMMENTS,
  GetCommentsAction,
  LOAD_COMMENTS,
  SET_COMMENTS,
} from '../action/postAction'
import { commentsType } from '../reducers/postsReducer'

function* workerSaga({ id }: GetCommentsAction) {
  yield put({ type: LOAD_COMMENTS, id })

  try {
    const data: AxiosPromise<commentsType> = yield getComments(id)
    const peyload = { data, id }
    yield put({ type: SET_COMMENTS, peyload })
  } catch {
    yield put({ type: ERROR_COMMENTS, id })
  }
}

function* watchLoadPostsSaga() {
  yield takeEvery(GET_COMMENTS, workerSaga)
}

export function* commentsSaga() {
  yield spawn(watchLoadPostsSaga)
}
