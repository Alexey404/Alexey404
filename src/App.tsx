import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { AboutMe } from './Pages/AboutMe/AboutMe'
import { HomePage } from './Pages/Home/HomePage'
import { LoginPage } from './Pages/Login/LoginPage'
import { Profile } from './Pages/Profile/Profile'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout Component={HomePage} />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/profile/:id',
    element: <Layout Component={Profile} />,
  },
  {
    path: '/aboutMe',
    element: <Layout Component={AboutMe} auth />,
  },
])

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
