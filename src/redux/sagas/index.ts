import { all } from 'axios'
import listPostsSaga from './sagaPosts'

export function* rootSaga() {
  yield all([listPostsSaga()])
}
