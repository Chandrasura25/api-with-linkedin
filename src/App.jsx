import { Routes, Route, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
function App() {
  return (
    <div className='h-screen flex justify-center items-center'>
   <Routes>
     <Route path='/' element={<Form/>} />
   </Routes>
   </div>
  )
}

export default App
