import { commentsType, postType } from '../reducers/postsReducer'

export const GET_COMMENTS = 'GET_COMMENTS'
export interface GetCommentsAction {
  type: typeof GET_COMMENTS
  id: number
}

export const SET_COMMENTS = 'SET_COMMENTS'
export interface SetCommentsAction {
  type: typeof SET_COMMENTS
  peyload: { data: Array<commentsType>; id: number }
}

export const LOAD_POSTS = 'LOAD_POSTS'
export interface LoadPostsAction {
  type: typeof LOAD_POSTS
}

export const SET_POSTS = 'SET_POSTS'
export interface SetPostsAction {
  type: typeof SET_POSTS
  peyload: Array<postType>
}

export const LOAD_COMMENTS = 'LOAD_COMMENTS'
export interface LoadCommentsAction {
  type: typeof LOAD_COMMENTS
  id: number
}

export const GET_PROFILE = 'GET_PROFILE'
export interface GetProfileAction {
  type: typeof GET_PROFILE
  id: number
}
export const GET_POSTS = 'GET_POSTS'
export interface GetPostsAction {
  type: typeof GET_POSTS
}

export const ERROR_COMMENTS = 'ERROR_COMMENTS'
export interface ErrorCommentsAction {
  type: typeof ERROR_COMMENTS
  id: number
}
export const ERROR_POSTS = 'ERROR_POSTS'
export interface ErrorPostsAction {
  type: typeof ERROR_POSTS
}

export type PostsActions =
  | SetCommentsAction
  | LoadPostsAction
  | SetPostsAction
  | ErrorPostsAction
  | LoadCommentsAction
  | ErrorCommentsAction
