import { useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { GET_MYPROFILE_NAME } from '../../redux/action/myProfileAction'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/store'
import { validateEmail, validatePassword } from '../../validate'
import s from '../../Pages/Login/Login.module.css'
import { Link } from 'react-router-dom'

type formType = {
  password: string
  email: string
  error: boolean
}

export const Login = () => {
  const dispatch = useDispatch()
  const profileState = useSelector(
    (state: AppStateType) => state.myProfileState
  )
  const [state, setstate] = useState<formType>({
    password: '4982AFfOfi',
    email: 'volik.aiii@gmail.com',
    error: false,
  })

  const getProfile = () => {
    const checkValidate =
      validatePassword.test(state.password) && validateEmail.test(state.email)

    if (checkValidate) {
      dispatch({
        type: GET_MYPROFILE_NAME,
        password: state.password,
        email: state.email,
      })
      setstate(e => {
        return { ...e, error: false }
      })
    } else {
      setstate(e => {
        return { ...e, error: true }
      })
    }
  }

  const setPassword = (value: string) => {
    setstate((e: formType) => {
      return { ...e, password: value }
    })
  }

  return (
    <Card className={s.card_login}>
      <h3 className={s.login_title}>Login</h3>
      <div className={s.form_container}>
        <Form className={s.form}>
          <Form.Group className='mb-3' controlId='emailLogin'>
            <Form.Label>Почта</Form.Label>
            <Form.Control
              value={state.email}
              onChange={event =>
                setstate((e: formType) => {
                  return { ...e, email: event.target.value }
                })
              }
              type='email'
              placeholder='name@example.com'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='passwordLogin'>
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              value={state.password}
              onChange={event => setPassword(event.target.value)}
              type='password'
              placeholder='Password'
            />
          </Form.Group>

          {state.error ? (
            <>
              <Alert variant='danger'>
                <div>
                  Пароль должен состоять из латинских больших и маленьких букв и
                  цифр, без спец.символов!
                </div>
              </Alert>
            </>
          ) : (
            <></>
          )}

          {profileState.isError ? (
            <Alert variant='danger'>
              <div>Не правильно введёт логин или пароль.</div>
            </Alert>
          ) : (
            <></>
          )}
        </Form>
        <div>
          <Button disabled={profileState.isLoading} onClick={getProfile}>
            {profileState.isLoading ? 'Loading…' : 'Войти'}
          </Button>
          <Link to='/'>
            <Button className={s.btn_next}>Продолжить без входа</Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
