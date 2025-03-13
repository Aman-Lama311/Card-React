import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FirstCard from './pages/FirstCard'
import SecondCard from './pages/SecondCard'
import ThirdCard from './pages/ThirdCard'

const App = () => {
 

  return (
    <div>
      <Routes>
        <Route path='/' element={<FirstCard/>} />
        <Route path='/second' element={<SecondCard/>} />
        <Route path='/third' element={<ThirdCard/>} />
      </Routes>
    </div>
  )
}

export default App
