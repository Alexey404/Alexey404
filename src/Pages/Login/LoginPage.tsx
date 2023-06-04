import { useEffect } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Login } from '../../Components/LoginPage/Login'
import { GET_MYPROFILE } from '../../redux/action/myProfileAction'
import { AppStateType } from '../../redux/store'
import s from './Login.module.css'
import { Rrgistration } from '../../Components/LoginPage/Rrgistration'

export const LoginPage = () => {
  const myIdStore = localStorage.getItem('myId')
  const profileState = useSelector(
    (state: AppStateType) => state.profile
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
        <div className={s.login_container}>
          <div className={s.card_сontainer}>
            <Tabs
              className={s.tabs_login}
              defaultActiveKey='login'
              transition={false}
              fill
            >
              <Tab tabClassName={s.tab_item} eventKey='login' title='Login'>
                <Login />
              </Tab>

              <Tab
                tabClassName={s.tab_item}
                eventKey='registration'
                title='Registration'
              >
                <Rrgistration />
              </Tab>
            </Tabs>
          </div>
        </div>
      </Container>
    </>
  )
}
