import { AxiosPromise } from 'axios'
import { all, delay, fork, put, takeLatest } from 'redux-saga/effects'
import { getComments } from '../../axios/Api'
import { commentsType } from '../reducers/postsReducer'
import {
  GET_COMMENTS,
  GetCommentsAction,
  LOAD_COMMENTS,
  SET_COMMENTS,
} from '../actions'

function* workerSaga({ id }: GetCommentsAction) {
  yield put({ type: LOAD_COMMENTS, peyload: id })
  yield delay(500)

  const data: AxiosPromise<commentsType> = yield getComments(id)
  const peyload = { data, id }
  yield put({ type: SET_COMMENTS, peyload })
}

function* watchLoadPostsSaga() {
  yield takeLatest(GET_COMMENTS, workerSaga)
}

export function* commentsSaga() {
  yield all([fork(watchLoadPostsSaga)])
}
