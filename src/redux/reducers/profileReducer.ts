import { authorType, postType } from './postsReducer'

type InitialStatePostsType = typeof initialState

const initialState = {
  posts: [
    {
      id: 1,
      idAuthor: 1,
      author: { id: 1, name: 'Олег', email: 'oleg@gmail.com' },
      email: 'oleg@gmail.com',
      heading: 'Как мы используем RTK Query в React-приложениях',
      content: 'sssssssssssss',
    },
    {
      id: 2,
      author: { id: 1, name: 'Олег', email: 'oleg@gmail.com' },
      heading: 'Как мы используем RTK Query в React-приложениях',
      content: 'sssssssssewwwwssss',
    },
  ] as Array<postType>,
  author: { id: 1, name: 'Олег', email: 'oleg@gmail.com' } as authorType,
}

export const profileReducer = (
  state: InitialStatePostsType = initialState,
  action: any
) => {
  switch (action.type) {
    case 'SET_POSTS_PROFILE': {
      return {
        ...state,
        posts: [...state.posts, ...action.peyload],
      }
    }
    case 'SET_PROFILE': {
      return {
        ...state,
        author: action.peyload,
      }
    }
    default:
      return state
  }
}
