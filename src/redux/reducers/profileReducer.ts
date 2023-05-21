import { authorType } from './postsReducer'

type InitialStatePostsType = typeof initialState

const initialState = {
  author: { id: 1, name: 'Олег', email: 'oleg@gmail.com' } as authorType,
}

export const profileReducer = (
  state: InitialStatePostsType = initialState,
  action: any
) => {
  switch (action.type) {
    case 'SET_AUTOR': {
      return {
        ...state,
        author: action.peyload,
      }
    }

    default:
      return state
  }
}
