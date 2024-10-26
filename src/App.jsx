import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Button from './TestButton'
import TestPage from './TestPage'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <h1>Hi, are you tired, we just starting now!</h1>
              <Button></Button>
            </>
          }
        />
        <Route path='/testPage' element = {<><TestPage></TestPage></>} />
      </Routes>
    </Router>
  )
}

export default App
