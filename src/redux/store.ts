import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { postsReducer } from './reducers/postsReducer'
import { profileReducer } from './reducers/profileReducer'
import { rootSaga } from './sagas/indexSaga'

const reducers = combineReducers({
  post: postsReducer,
  profile: profileReducer,
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

export default store
