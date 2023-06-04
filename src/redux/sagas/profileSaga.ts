import { AxiosPromise } from 'axios'
import { put, spawn, takeEvery } from 'redux-saga/effects'
import { getProfile } from '../../axios/Api'
import { GET_PROFILE, GetProfileAction } from '../action/postAction'
import {
  errorAuthor,
  loadAuthor,
  setAuthor,
} from '../newRedusers/authorREduser'
import { authorType } from '../newRedusers/postsReducer'
import { getPostSaga } from './postsSaga'

function* getAutorSaga(id: number) {
  yield put(loadAuthor())

  try {
    const author: AxiosPromise<authorType> = yield getProfile(id)

    yield put(setAuthor(author as any))
  } catch {
    yield put(errorAuthor())
  }
}

function* workerSaga({ id }: GetProfileAction) {
  yield spawn(getPostSaga, id)
  yield spawn(getAutorSaga, id)
}

function* watchPostsSaga() {
  yield takeEvery(GET_PROFILE, workerSaga)
}

export function* profileSaga() {
  yield spawn(watchPostsSaga)
}
