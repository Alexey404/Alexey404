import { AxiosPromise } from 'axios'
import { delay, put, spawn, takeEvery } from 'redux-saga/effects'
import { getComments } from '../../axios/Api'
import {
  ERROR_COMMENTS,
  GET_COMMENTS,
  GetCommentsAction,
  LOAD_COMMENTS,
  SET_COMMENTS,
} from '../actions'
import { commentsType } from '../reducers/postsReducer'

function* workerSaga({ id }: GetCommentsAction): any {
  yield put({ type: LOAD_COMMENTS, id })
  yield delay(300)

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
