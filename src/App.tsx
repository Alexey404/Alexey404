import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { AboutMe } from './Pages/AboutMe/AboutMe'
import { Layout } from './Pages/Components/Layout'
import { HomePage } from './Pages/Home/HomePage'
import { Profile } from './Pages/Profile/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout Component={HomePage} />,
  },
  {
    path: '/profile',
    element: <Layout Component={Profile} />,
  },
  {
    path: '/AboutMe',
    element: <Layout Component={AboutMe} />,
  },
])

export const App = () => {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
