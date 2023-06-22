import React, {useEffect} from 'react';
//hooks
import {Route,Routes,useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'


const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, [])
  
  return (
    <GoogleOAuthProvider 
    clientId='714339637927-fjod3orb10vqqs1afcgn0usa8keq0he7.apps.googleusercontent.com'>
      <Routes>
        <Route path='login' element = {<Login/>}/>
        <Route path='/*' element = {<Home/>}/> 
      </Routes>
    </GoogleOAuthProvider>
  )
}

export default App
