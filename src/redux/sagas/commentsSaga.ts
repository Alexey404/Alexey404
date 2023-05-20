import { AxiosPromise } from 'axios'
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects'
import { getComments } from '../../axios/Api'
import { commentsType } from '../reducers/postsReducer'

function* workerSaga({ id }: any) {
  console.log('start get comment')
  yield put({ type: 'LOAD_COMMENTS', peyload: id })

  yield delay(1000)
  const data: AxiosPromise<commentsType> = yield getComments(id)
  const peyload = { data, id }
  yield put({ type: 'SET_COMMENTS', peyload })
  console.log('finish get comment')
}

function* watchLoadPostsSaga() {
  yield takeLatest('GET_COMMENTS', workerSaga)
}

export function* commentsSaga() {
  yield all([fork(watchLoadPostsSaga)])
}
