import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../redux/store'
import { GET_MYPROFILE } from '../redux/action/myProfileAction'
import { Navigate } from 'react-router-dom'
import { Loader } from './Loader/Loader'

type typeProps = {
  Component: FC
  auth?: boolean
}

export const Auth = ({ Component, auth }: typeProps) => {
  const myIdStore = localStorage.getItem('myId')
  const dispatch = useDispatch()
  const profileState = useSelector(
    (state: AppStateType) => state.myProfileState
  )

  useEffect(() => {
    if (myIdStore) {
      dispatch({ type: GET_MYPROFILE, id: Number(myIdStore) })
    }
  }, [dispatch])

  if (profileState.isLoading) {
    console.log('profileState', profileState.isLoading)
    return (
      <div className='layout-contayner'>
        <Loader />
      </div>
    )
  }

  if (!myIdStore && !profileState.profile.id && auth) {
    console.log('profile.id', myIdStore && !profileState.profile.id)
    return <Navigate to='/login' />
  }
  return (
    <>
      <Component />
    </>
  )
}
