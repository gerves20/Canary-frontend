import React, {useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Forgot from './components/pages/Forgot';
import Verification from './components/pages/Verification';
import { ToastContainer } from 'react-toastify';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import Vaccines from './components/pages/Vaccines';

import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Select from 'react-select';


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
        <Navbar />
        <Routes>
        <Route path='/' exact element={<Home/>}   />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/verify/:token' element={<Verification/>} />
        <Route path='/forgot' element={<Forgot/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/vaccines" element={<Vaccines/>} />
        <Route path="/settings" element={<Settings/>} />
        
        
        
        </Routes>
        
        
      </Router>
    </>
  );
}







export default App;