import { Button } from 'react-bootstrap'
import './App.css'
import logo from './logo.svg'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button onClick={() => dispatch({ type: 'GET_POSTS' })}>
          Learn React
        </Button>
      </header>
    </div>
  )
}

export default App
