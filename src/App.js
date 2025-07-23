import React from 'react'
import "./App.css";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Navbar from './components/common/Navbar';
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import VerifyEmail from './pages/VerifyEmail';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import MyProfile from './components/core/Dashboard/MyProfile';
// import Index from './components/core/Dashboard/Settings/index';
import Settings from './components/core/Dashboard/Settings';

const App = () => {
  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col'>
      <Navbar/>
      <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/forgot-password" element = {<ForgotPassword/>}/>
          <Route path = "update-password/:id" element = {<UpdatePassword/>}/>
          <Route path = "verify-email" element = {<VerifyEmail/>}/>
          <Route path = "about" element = {<About/>}/>
          <Route path = "contact" element = {<Contact/>}/>

          <Route
            element={
              <Dashboard/>
            }
            >
            <Route path = "/dashboard/my-profile" element = {<MyProfile/>}/>
            <Route path = "/dashboard/settings" element = {<Settings/>}/>
          </Route>
          
          
      </Routes>
      
    </div>
  )
}

export default App