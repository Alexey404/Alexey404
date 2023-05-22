import { LOAD_AUTOR, ProfileAction, SET_AUTOR } from '../actions'
import { authorType } from './postsReducer'

type InitialStatePostsType = typeof initialState

const initialState = {
  author: { id: 1, name: 'Олег', email: 'oleg@gmail.com' } as authorType,
  isLoading: false,
}

export const profileReducer = (
  state: InitialStatePostsType = initialState,
  action: ProfileAction
) => {
  switch (action.type) {
    case LOAD_AUTOR: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case SET_AUTOR: {
      return {
        ...state,
        author: action.peyload,
        isLoading: false,
      }
    }

    default:
      return state
  }
}
