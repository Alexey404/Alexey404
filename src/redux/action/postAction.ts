export const GET_COMMENTS = 'GET_COMMENTS'
export interface GetCommentsAction {
  type: typeof GET_COMMENTS
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
