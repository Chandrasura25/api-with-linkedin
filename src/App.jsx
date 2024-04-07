import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home'
import Form from './components/Form';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
function App() {
  return (
    <div className='h-screen flex justify-center items-center'>
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/form' element={
      <>
        <SignedIn>
          <Form/>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn/>
        </SignedOut>
      </>
     } />
   </Routes>
   </div>
  )
}

export default App
