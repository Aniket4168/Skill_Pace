import React from 'react'
import "./App.css";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Navbar from './components/common/Navbar';
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ForgotPassword from './pages/ForgotPassword';

const App = () => {
  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col'>
      <Navbar/>
      <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/forgot-password" element = {<ForgotPassword/>}/>
      </Routes>
    </div>
  )
}

export default App