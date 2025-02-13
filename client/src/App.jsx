import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/learners/Home';
import CoursesList from './pages/learners/CoursesList';
import CourseDetails from './pages/learners/CourseDetails';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course-list' element={<CoursesList/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        
      </Routes>
    </div>
  )
}

export default App