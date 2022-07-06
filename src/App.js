import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Home from "./components/pages/Home"
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
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        
        </Routes>
        
        
      </Router>
    </>
  );
}







export default App;