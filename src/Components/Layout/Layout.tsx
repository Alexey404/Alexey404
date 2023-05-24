import MenuIcon from '@mui/icons-material/Menu'
import { FC } from 'react'
import { ButtonGroup, Container, Dropdown, Image } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import './Layout.css'
import { Link, useLocation } from 'react-router-dom'

type typeProps = {
  Component: FC
}

export const Layout = ({ Component }: typeProps) => {
  const location = useLocation()

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
                <Dropdown.Item
                  as={Link}
                  to={'/profile/' + 3}
                  active={location.pathname === '/profile/' + 3}
                >
                  <div className='dropdown-profile-card'>
                    <Image
                      className='icon-placehold'
                      src='https://placehold.it/48x48/'
                    />

                    <div className='dropdown-profile'>
                      <div>Волик Алексей</div>
                      <div>volik.aiii@gmail.com</div>
                    </div>
                  </div>
                </Dropdown.Item>

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
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Navbar>
      </div>
      <div className='layout-contayner'>
        <Component />
      </div>
      <div className='footer' />
    </div>
  )
}
