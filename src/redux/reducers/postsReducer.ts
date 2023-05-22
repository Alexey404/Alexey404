import {
  LOAD_COMMENTS,
  LOAD_POSTS,
  PostsActions,
  SET_COMMENTS,
  SET_POSTS,
} from '../actions'

export type postType = {
  id: number
  author: authorType
  content: string
  heading: string
  isLoading: boolean
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
      }
    }
    case SET_POSTS: {
      return {
        ...state,
        posts: action.peyload,
        isLoading: false,
      }
    }
    case LOAD_COMMENTS: {
      const newPosts = state.posts.map(post =>
        post.id === action.id ? { ...post, isLoading: true } : post
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
    default:
      return state
  }
}
