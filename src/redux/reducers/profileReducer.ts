import { LOAD_AUTOR, ProfileAction, SET_AUTOR } from '../actions'
import { authorType } from './postsReducer'

type InitialStatePostsType = typeof initialState

const initialState = {
  author: { id: 1, name: 'Олег', email: 'oleg@gmail.com' } as authorType,
  isLoad: false,
}

export const profileReducer = (
  state: InitialStatePostsType = initialState,
  action: ProfileAction
) => {
  switch (action.type) {
    case LOAD_AUTOR: {
      return {
        ...state,
        isLoad: true,
      }
    }
    case SET_AUTOR: {
      return {
        ...state,
        author: action.peyload,
        isLoad: false,
      }
    }

    default:
      return state
  }
}
