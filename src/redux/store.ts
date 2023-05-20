import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { postsReducer } from './reducers/postsReducer'
import { rootSaga } from './sagas/indexSaga'

const reducers = combineReducers({
  post: postsReducer,
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

export default store
