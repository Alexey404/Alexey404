import { AxiosPromise } from 'axios'
import { put, spawn, takeEvery } from 'redux-saga/effects'
import { getProfile } from '../../axios/Api'
import { GET_PROFILE, GetProfileAction } from '../action/postAction'
import { ERROR_AUTOR, LOAD_AUTOR, SET_AUTOR } from '../action/profileAction'
import { authorType } from '../reducers/postsReducer'
import { getPostSaga } from './postsSaga'

function* getAutorSaga(id: number) {
  yield put({ type: LOAD_AUTOR })

  try {
    const author: AxiosPromise<authorType> = yield getProfile(id)
    yield put({ type: SET_AUTOR, peyload: author })
  } catch {
    yield put({ type: ERROR_AUTOR })
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
