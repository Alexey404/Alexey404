import { Button } from 'react-bootstrap'
import './App.css'
import logo from './logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from './Pages/Components/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './Pages/Home/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout Component={HomePage} />,
  },
])

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
