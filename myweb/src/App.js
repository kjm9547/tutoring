import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom'
import Main from './component/2weeks/screens/Main';
import SignUp from './component/2weeks/screens/SignUp';
import SignIn from './component/2weeks/screens/SignIn';
import UserMain from './component/2weeks/usePage/UserMain';
import GuestPage from './component/2weeks/screens/guestPage';
function App() {



  return (
    <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/usermain' element={<UserMain/>}/>
        <Route path='/guest' element={<GuestPage/>}/>
    </Routes>

  );
}

export default App;
