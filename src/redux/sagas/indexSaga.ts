import { all, delay, takeEvery } from 'redux-saga/effects'
import { listPostsSaga } from './sagaPosts'

export function* rootSaga() {
  yield all([listPostsSaga()]) 
}
