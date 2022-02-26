import React from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import MoviePage from './components/MoviePage'
import HomePage from './components/HomePage'

const App = () => {
  
  return (
    <div>
      
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/movie/:movieId' element={<MoviePage />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
