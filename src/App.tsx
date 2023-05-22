import 'bootstrap/dist/css/bootstrap.min.css'
import {
  RouterProvider,
  createHashRouter
} from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { AboutMe } from './Pages/AboutMe/AboutMe'
import { HomePage } from './Pages/Home/HomePage'
import { Profile } from './Pages/Profile/Profile'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout Component={HomePage} />,
  },
  {
    path: '/profile/:id',
    element: <Layout Component={Profile} />,
  },
  {
    path: '/aboutMe',
    element: <Layout Component={AboutMe} />,
  },
])

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
