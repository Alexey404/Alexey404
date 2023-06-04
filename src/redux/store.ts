import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './sagas/rootSaga'
import { authorReducer } from './newRedusers/authorREduser'
import { postsReducer } from './newRedusers/postsReducer'
import { profileReducer } from './newRedusers/myProfileReduser'

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
