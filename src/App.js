import React, {useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Forgot from './components/pages/Forgot';
import Verification from './components/pages/Verification';
import { ToastContainer } from 'react-toastify';

import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Select from 'react-select';
import Settings from './components/pages/Settings';
import Profile from './components/pages/Profile';
import Vaccines from './components/pages/Vaccines';
import Test from './components/pages/Test'




function App() {

  


  // const options = [
  //   { value: 'blues', label: 'Blues' },
  //   { value: 'rock', label: 'Rock' },
  //   { value: 'jazz', label: 'Jazz' },
  //   { value: 'orchestra' , label: 'Orchestra' } 
  // ];
  
  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Router>
        
        <Routes>
        <Route path='/' exact element={<Home/>}   />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/verify/:token' element={<Verification/>} />
        <Route path='/forgot' element={<Forgot/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/vaccines" element={<Vaccines/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/test" element={<Test/>} />
        
        
        

        
        
        
        </Routes>
        
        
      </Router>
    </>
  );
}







export default App;