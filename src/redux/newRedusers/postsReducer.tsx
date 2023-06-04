import { createSlice } from '@reduxjs/toolkit'

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
  img: string
}

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [] as postType[],
    isLoading: false,
    isError: false,
  },
  reducers: {
    loadPosts(state) {
      state.isLoading = true
      state.isError = false
    },
    setPosts(state, action: any) {
      state.posts = action.payload

      state.isLoading = false
    },
    errorPosts(state) {
      state.isLoading = false
      state.isError = true
    },
    loadComments(state, action: any) {
      const newPosts = state.posts.map((post: postType) =>
        post.id === action.id
          ? { ...post, isLoading: true, isError: false }
          : post
      )
      state.posts = newPosts
    },
    setComments(state, action: any) {
      const newPosts = state.posts.map(post =>
        post.id === action.payload.id
          ? { ...post, comments: action.payload.data, isLoading: false }
          : post
      )

      state.posts = newPosts
    },
    errorComments(state, action: any) {
      const newPosts = state.posts.map(post =>
        post.id === action.id
          ? { ...post, isLoading: false, isError: true }
          : post
      )
      state.posts = newPosts
    },
  },
})

export const {
  loadPosts,
  setPosts,
  errorPosts,
  loadComments,
  setComments,
  errorComments,
} = postsSlice.actions

export const postsReducer = postsSlice.reducer
