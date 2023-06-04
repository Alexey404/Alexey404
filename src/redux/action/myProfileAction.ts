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

export const CREATE_NEW_ACCAUNT = 'CREATE_NEW_ACCAUNT'
export interface CreateNewAccountAction {
  type: typeof CREATE_NEW_ACCAUNT
  password: string
  email: string
  name: string
}
