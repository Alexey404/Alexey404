import { useState } from 'react'
import s from '../../Pages/Login/Login.module.css'
import { Button, Card, Form } from 'react-bootstrap'
import { CREATE_NEW_ACCAUNT } from '../../redux/action/myProfileAction'
import { useDispatch } from 'react-redux'

type formType = {
  password: string
  email: string
  rePassword: string
  name: string
  error: boolean
}

export const Rrgistration = () => {
  const dispatch = useDispatch()
  const [state, setstate] = useState<formType>({
    password: '',
    name: '',
    email: '',
    rePassword: '',
    error: false,
  })

  const createNewAccount = () => {
    dispatch({
      type: CREATE_NEW_ACCAUNT,
      password: state.password,
      email: state.email,
      name: state.name,
    })
  }

  return (
    <Card className={s.card_login}>
      <h3 className={s.login_title}>Rrgistration</h3>
      <div className={s.form_container}>
        <Form className={s.form}>
          <Form.Group controlId='namelRegis' className='mb-3'>
            <Form.Label>Имя</Form.Label>
            <Form.Control
              value={state.name}
              onChange={event =>
                setstate((e: formType) => {
                  return { ...e, name: event.target.value }
                })
              }
              type='text'
              placeholder='Имя'
            />
          </Form.Group>

          <Form.Group controlId='emailRegis' className='mb-3'>
            <Form.Label>Почта</Form.Label>
            <Form.Control
              className='form-control'
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

          <Form.Group controlId='passwordRegis' className='mb-3'>
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              onChange={event =>
                setstate((e: formType) => {
                  return { ...e, password: event.target.value }
                })
              }
              value={state.password}
              type='password'
              placeholder='Password'
            />
          </Form.Group>
          <Form.Group controlId='ePasswordRegis' className='mb-3'>
            <Form.Label>Повторите пароль</Form.Label>
            <Form.Control
              onChange={event =>
                setstate((e: formType) => {
                  return { ...e, rePassword: event.target.value }
                })
              }
              value={state.rePassword}
              type='password'
              placeholder='rePassword'
            />
          </Form.Group>
        </Form>

        <Button disabled onClick={createNewAccount}>
          Зарегистрироваться
        </Button>
      </div>
    </Card>
  )
}
