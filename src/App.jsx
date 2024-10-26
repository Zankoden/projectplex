import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Button from './TestButton'
import TestPage from './TestPage'
import TestPage2 from './TestPage2'

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
              <h1>Hi, are you tired? We’re just starting now!</h1>
              <Button route="/testPage" buttonName = "Click me" />
              <h1>Ready?</h1>
              <Button route="/testPage2" buttonName = "Start Exploring" />
            </>
          }
        />
        <Route path='/testPage' element={<><TestPage /></>} />
        <Route path='/testPage2' element={<><TestPage2 /></>} />
      </Routes>
    </Router>
  )
}

export default App
