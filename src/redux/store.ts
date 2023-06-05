import {
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { authorReducer } from './newRedusers/authorREduser'
import { profileReducer } from './newRedusers/myProfileReduser'
import { postsReducer } from './newRedusers/postsReducer'
import { rootSaga } from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  profile: profileReducer,
  author: authorReducer,
  posts: postsReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
