import { createSlice } from '@reduxjs/toolkit'
import { authorType } from './postsReducer'

const authorSlice = createSlice({
  name: 'author',
  initialState: {
    author: {} as authorType,
    isLoading: false,
    isError: false,
  },
  reducers: {
    loadAuthor(state) {
      state.isLoading = true
      state.isError = false
    },
    errorAuthor(state) {
      state.isLoading = false
      state.isError = true
    },
    setAuthor(state, action: any) {
			console.log(action.payload)
      state.author = action.payload
      state.isLoading = false
    },
  },
})

export const { loadAuthor, errorAuthor, setAuthor } = authorSlice.actions

export const authorReducer = authorSlice.reducer
