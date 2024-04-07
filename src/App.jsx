import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Form from './components/Form'
function App() {

  return (
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/form' element={<Form/>} />
   </Routes>
  )
}

export default App
