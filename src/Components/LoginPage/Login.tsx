import { useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { GET_MYPROFILE_NAME } from '../../redux/action/myProfileAction'
import { useDispatch } from 'react-redux'

type formType = {
  password: string
  email: string
  error: boolean
}

export const Login = () => {
  const [state, setstate] = useState<formType>({
    password: '',
    email: '',
    error: false,
  })
  const dispatch = useDispatch()
  const validatePassword =
    /.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/

  const validateEmail =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

  const getProfile = () => {
    if (
      validatePassword.test(state.password) &&
      validateEmail.test(state.email)
    ) {
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
    <div className='login-container'>
      <Card className='card-login'>
        <h3 className='login-title'>Login</h3>
        <div className='form-container'>
          <Form className='form'>
            <Form.Group
              id='email'
              className='mb-3'
              controlId='exampleForm.ControlInput1'
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={event =>
                  setstate((e: formType) => {
                    return { ...e, email: event.target.value }
                  })
                }
                type='email'
                placeholder='name@example.com'
              />
            </Form.Group>

            <Form.Group
              id='name'
              className='mb-3'
              controlId='exampleForm.ControlInput1'
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={state.password}
                onChange={event => setPassword(event.target.value)}
                type='text'
                placeholder='Password'
              />
            </Form.Group>
            {state.error ? (
              <>
                <Alert variant='danger'>
                  <h4>Не правильно введёт логин или пароль.</h4>
                  <div>
                    В пароле должно быть обязатльно латинские большие и
                    маленькие буквы и цифры, спец.символы нельзя!
                  </div>
                </Alert>
              </>
            ) : (
              <></>
            )}
          </Form>

          <Button onClick={getProfile}>Войти</Button>
        </div>
      </Card>
    </div>
  )
}
