import MenuIcon from '@mui/icons-material/Menu'
import { FC } from 'react'
import { ButtonGroup, Container, Dropdown, Image } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { DELETE_PROFILE } from '../../redux/action/myProfileAction'
import { AppStateType } from '../../redux/store'
import { Auth } from '../Auth'
import './Layout.css'

type typeProps = {
  Component: FC
  auth?: boolean
}

export const Layout = ({ Component, auth }: typeProps) => {
  const profileState = useSelector(
    (state: AppStateType) => state.myProfileState
  )
  const dispatch = useDispatch()
  const location = useLocation()

  const logOut = () => {
    dispatch({ type: DELETE_PROFILE })
  }
  const isLogin = profileState.profile.id

  return (
    <div>
      <div className='navbar-indent'>
        <Navbar
          key={10}
          variant='dark'
          bg='dark'
          expand='true'
          className='mb-3'
        >
          <Container>
            <Navbar.Brand as={Link} to='/'>
              Назад
              {
                // (обычно логотип используется как переход на главную странницу в данном случае будет выполнять функцию назад)
              }
            </Navbar.Brand>

            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle className='dropdown-layout' variant='secondary'>
                <MenuIcon />
              </Dropdown.Toggle>

              <Dropdown.Menu className='super-colors' align={{ lg: 'end' }}>
                {isLogin ? (
                  <Dropdown.Item
                    as={Link}
                    to={'/profile/' + profileState.profile.id}
                    active={
                      location.pathname ===
                      '/profile/' + profileState.profile.id
                    }
                  >
                    <div className='dropdown-profile-card'>
                      <Image
                        className='icon-placehold'
                        src='https://placehold.it/48x48/'
                      />

                      <div className='dropdown-profile'>
                        <div>{profileState.profile.name}</div>
                        <div>{profileState.profile.email}</div>
                      </div>
                    </div>
                  </Dropdown.Item>
                ) : (
                  <></>
                )}

                <Dropdown.Item
                  as={Link}
                  to='/'
                  active={location.pathname === '/'}
                >
                  Список постов
                </Dropdown.Item>

                <Dropdown.Item
                  as={Link}
                  to='/aboutMe'
                  active={location.pathname === '/aboutMe'}
                >
                  Обо мне
                </Dropdown.Item>
                {isLogin ? (
                  <Dropdown.Item onClick={logOut}>Выйти</Dropdown.Item>
                ) : (
                  <Dropdown.Item as={Link} to={'/login'}>
                    Войти
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Navbar>
      </div>

      <div className='layout-contayner'>
        <Auth Component={Component} auth={auth} />
      </div>

      <div className='footer' />
    </div>
  )
}
