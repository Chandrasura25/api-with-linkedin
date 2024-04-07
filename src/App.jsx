import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Form from './components/Form'
function App() {

  return (
    <div className='h-screen flex justify-center items-center'>
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/form' element={<Form/>} />
   </Routes>
   </div>
  )
}

export default App
