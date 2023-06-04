import { createSlice } from '@reduxjs/toolkit'
import { authorType } from './postsReducer'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {} as authorType,
    isLoading: false,
    isError: false,
  },
  reducers: {
    setProfile(state, action: any) {
      localStorage.setItem('myId', String(action.payload.id))
      state.profile = action.payload
      state.isLoading = false
      state.isError = false
    },
    loadProfile(state) {
      state.isLoading = true
    },
    errorProfile(state) {
      state.isError = true
      state.isLoading = false
    },
    deleteProfile(state) {
      localStorage.setItem('myId', '')
      state.profile = {} as authorType
    },
  },
})

export const { setProfile, loadProfile, errorProfile, deleteProfile } =
  profileSlice.actions

export const profileReducer = profileSlice.reducer

