import { authorType } from '../reducers/postsReducer'

export const SET_AUTOR = 'SET_AUTOR'
export interface SetAutorAction {
  type: typeof SET_AUTOR
  peyload: authorType
}

export const LOAD_AUTOR = 'LOAD_AUTOR'
export interface LoadAutorAction {
  type: typeof LOAD_AUTOR
}
export const ERROR_AUTOR = 'ERROR_AUTOR'
export interface ErrorAutorAction {
  type: typeof ERROR_AUTOR
}

export type ProfileAction = SetAutorAction | LoadAutorAction | ErrorAutorAction
