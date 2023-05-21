import MenuIcon from '@mui/icons-material/Menu'
import { FC } from 'react'
import { ButtonGroup, Container, Dropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import './Layout.css'
import { Link } from 'react-router-dom'

type typeProps = {
  Component: FC
}

export const Layout = ({ Component }: typeProps) => {
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
              React SPA
            </Navbar.Brand>

            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle className='dropdown-layout' variant='secondary'>
                <MenuIcon />
              </Dropdown.Toggle>
              <Dropdown.Menu className='super-colors' align={{ lg: 'end' }}>
                <Dropdown.Item as={Link} to='/' eventKey='1'>
                  Список постов
                </Dropdown.Item>
                <Dropdown.Item as={Link} to='/AboutMe' eventKey='2'>
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
