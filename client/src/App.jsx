import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/learners/Home';
import CoursesList from './pages/learners/CoursesList';
import CourseDetails from './pages/learners/CourseDetails';
import MyEnrollments from './pages/learners/MyEnrollments';
import Player from './pages/learners/Player';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-list/:input' element={<CoursesList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments/>}/>
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-list' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App;