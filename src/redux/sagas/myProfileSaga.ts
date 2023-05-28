import { AxiosPromise } from 'axios'
import { put, spawn, takeLatest } from 'redux-saga/effects'
import { getProfile, getProfileOfPassword } from '../../axios/Api'
import {
  GET_MYPROFILE,
  GET_MYPROFILE_NAME,
  GetMyProfileAction,
  GetMyProfileNameAction,
  LOAD_PROFILE,
  SET_PROFILE,
} from '../action/myProfileAction'
import { authorType } from '../reducers/postsReducer'

function* workerSaga({ id }: GetMyProfileAction) {
  yield put({ type: LOAD_PROFILE })

  try {
    const author: AxiosPromise<authorType> = yield getProfile(id)
    yield put({ type: SET_PROFILE, peyload: author })
  } catch {
    console.log('error')
  }
}

function* getProfileSaga({ password, email }: GetMyProfileNameAction) {
  yield put({ type: LOAD_PROFILE })

  try {
    const author: AxiosPromise<authorType[]> = yield getProfileOfPassword(
      password,
      email
    )
    const getProfile: any = author
    yield put({ type: SET_PROFILE, peyload: getProfile[0] })
  } catch {
    console.log('error')
  }
}

function* watchGetMyProfileSaga() {
  yield takeLatest(GET_MYPROFILE, workerSaga)
  yield takeLatest(GET_MYPROFILE_NAME, getProfileSaga)
}

export function* myProfileSaga() {
  yield spawn(watchGetMyProfileSaga)
}
