import { AxiosPromise } from 'axios'
import { put, spawn, takeLatest } from 'redux-saga/effects'
import {
  getProfile,
  getProfileOfPassword,
  postCreateNewAccount,
} from '../../axios/Api'
import {
  CREATE_NEW_ACCAUNT,
  CreateNewAccountAction,
  GET_MYPROFILE,
  GET_MYPROFILE_NAME,
  GetMyProfileAction,
  GetMyProfileNameAction
} from '../action/myProfileAction'

import {
  errorProfile,
  loadProfile,
  setProfile,
} from '../newRedusers/myProfileReduser'
import { authorType } from '../newRedusers/postsReducer'

function* workerSaga({ id }: GetMyProfileAction) {
  yield put(loadProfile())

  try {
    const author: AxiosPromise<authorType> = yield getProfile(id)
    yield put(setProfile(author as any))
  } catch {
    yield put(errorProfile())
  }
}
function* createNewAccount({ password, email, name }: CreateNewAccountAction) {
  yield put(loadProfile())

  try {
    const author: AxiosPromise<authorType> = yield postCreateNewAccount(
      password,
      email,
      name
    )
    yield put(setProfile(author as any))
  } catch {
    yield put(errorProfile())
  }
}

function* getProfileSaga({ password, email }: GetMyProfileNameAction) {
  yield put(loadProfile())

  try {
    const author: AxiosPromise<authorType[]> = yield getProfileOfPassword(
      password,
      email
    )
    const getProfile: any = author
    yield put(setProfile(getProfile[0]))
  } catch {
    yield put(errorProfile())
  }
}

function* watchGetMyProfileSaga() {
  yield takeLatest(GET_MYPROFILE, workerSaga)
  yield takeLatest(GET_MYPROFILE_NAME, getProfileSaga)
  yield takeLatest(CREATE_NEW_ACCAUNT, createNewAccount)
}

export function* myProfileSaga() {
  yield spawn(watchGetMyProfileSaga)
}
