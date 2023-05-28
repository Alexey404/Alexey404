import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Loader } from '../../Components/Loader/Loader'
import { Login } from '../../Components/LoginPage/Login'
import { GET_MYPROFILE } from '../../redux/action/myProfileAction'
import { AppStateType } from '../../redux/store'
import './Login.css'

export const LoginPage = () => {
  const myIdStore = localStorage.getItem('myId')
  const profileState = useSelector(
    (state: AppStateType) => state.myProfileState
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (myIdStore) {
      dispatch({ type: GET_MYPROFILE, id: Number(myIdStore) })
    }
  }, [dispatch, myIdStore])

  if (profileState.profile.id) {
    return <Navigate to='/' />
  }

  return (
    <>
      <Container>
        <div className='card-сontainer'>
          <Login />
        </div>
      </Container>
    </>
  )
}
