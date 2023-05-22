import { AxiosPromise } from 'axios'
import { all, delay, put, spawn, takeEvery } from 'redux-saga/effects'
import { getComments } from '../../axios/Api'
import {
  GET_COMMENTS,
  GetCommentsAction,
  LOAD_COMMENTS,
  SET_COMMENTS,
} from '../actions'
import { commentsType } from '../reducers/postsReducer'

function* workerSaga({ id }: GetCommentsAction): any {
  yield put({ type: LOAD_COMMENTS, id })
  yield delay(300)

  const data: AxiosPromise<commentsType> = yield getComments(id)
  const peyload = { data, id }
  yield put({ type: SET_COMMENTS, peyload })
}

function* watchLoadPostsSaga() {
  yield takeEvery(GET_COMMENTS, workerSaga)
}

export function* commentsSaga() {
  yield all([spawn(watchLoadPostsSaga)])
}
