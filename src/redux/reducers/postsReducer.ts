import {
  ERROR_COMMENTS,
  ERROR_POSTS,
  LOAD_COMMENTS,
  LOAD_POSTS,
  PostsActions,
  SET_COMMENTS,
  SET_POSTS,
} from '../action/postAction'

export type postType = {
  id: number
  author: authorType
  content: string
  heading: string
  isLoading: boolean
  isError: boolean
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
  isLoading: false,
  isError: false,
}

export const postsReducer = (
  state: InitialStatePostsType = initialState,
  action: PostsActions
) => {
  switch (action.type) {
    case LOAD_POSTS: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    }
    case SET_POSTS: {
      return {
        ...state,
        posts: action.peyload,
        isLoading: false,
      }
    }
    case ERROR_POSTS: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    }
    case LOAD_COMMENTS: {
      const newPosts = state.posts.map(post =>
        post.id === action.id
          ? { ...post, isLoading: true, isError: false }
          : post
      )
      return { ...state, posts: newPosts }
    }
    case SET_COMMENTS: {
      const newPosts = state.posts.map(post =>
        post.id === action.peyload.id
          ? { ...post, comments: action.peyload.data, isLoading: false }
          : post
      )
      return {
        ...state,
        posts: newPosts,
      }
    }
    case ERROR_COMMENTS: {
      const newPosts = state.posts.map(post =>
        post.id === action.id
          ? { ...post, isLoading: false, isError: true }
          : post
      )
      console.log(action)
      return { ...state, posts: newPosts }
    }
    default:
      return state
  }
}
