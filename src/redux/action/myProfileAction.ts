import { authorType } from '../reducers/postsReducer'

export const GET_MYPROFILE = 'GET_MYPROFILE'
export interface GetMyProfileAction {
  type: typeof GET_MYPROFILE
  id: number
}

export const GET_MYPROFILE_NAME = 'GET_MYPROFILE_NAME'
export interface GetMyProfileNameAction {
  type: typeof GET_MYPROFILE_NAME
  password: string
  email: string
}

export const SET_PROFILE = 'SET_PROFILE'
export interface SetProfileAction {
  type: typeof SET_PROFILE
  peyload: authorType
}

export const DELETE_PROFILE = 'DELETE_PROFILE'
export interface DeleteProfileAction {
  type: typeof DELETE_PROFILE
}

export const LOAD_PROFILE = 'LOAD_PROFILE'
export interface LoadProfileAction {
  type: typeof LOAD_PROFILE
}

export type MyProfileAction =
  | SetProfileAction
  | DeleteProfileAction
  | LoadProfileAction
