export type postType = {
  id: number
  author: authorType
  content: string
  heading: string
  comments: Array<commentsType>
}

export type commentsType = {
  id: number
  author: authorType
  content: string
}

export type authorType = {
  id: number
  name: string
  email: string
}

type InitialStatePostsType = typeof initialState

const initialState = {
  posts: [] as Array<postType>,
  loading: false,
}

export const postsReducer = (
  state: InitialStatePostsType = initialState,
  action: any
) => {
  switch (action.type) {
    case 'LOAD_POSTS': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'SET_POSTS': {
      return {
        ...state,
        posts: action.peyload,
        loading: false,
      }
    }
    case 'LOAD_COMMENTS': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'SET_COMMENTS': {
      state.posts.map(e =>
        e.id === action.peyload.id ? { ...e, comments: e.comments } : e
      )
      return {
        ...state,
        posts: state.posts.map(e =>
          e.id === action.peyload.id
            ? { ...e, comments: action.peyload.comments }
            : e
        ),
      }
    }
    default:
      return state
  }
}
