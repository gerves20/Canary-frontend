
import React from 'react';
import './Home.css';
import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Navbar';
// import Vector from './vector.png';


const Home = () =>{
    return (

    <body>
        <Navbar/>
        <div>
            <h1>CANARY</h1>
            <h4>Universal Vaccine Pass</h4>
            <img src="vector.png" id="image"/>
            {/* <img src ="http://localhost:3000/public/vector.png" className='img' /> */}
            {/* <img src = {require('./public/vector.png')} alt = 'logo'/> */}
            <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus orci
        mi, venenatis ac nisl vel, porta consequat augue. In quis nulla odio.
        Integer vel tristique nisl. Vivamus sed urna ligula. Nullam in orci
        lacus. Maecenas eget nulla ut ex gravida gravida id non odio. Curabitur
        lacus erat, egestas ac nisl ut, lacinia scelerisque massa. Nam viverra
        ligula nunc, vel venenatis eros hendrerit eget. Curabitur posuere semper
        sem ut tincidunt. Donec turpis velit, viverra sed tempor eu, dapibus non
        eros. Ut in finibus leo. Maecenas sit amet varius felis. Ut massa eros,
        porta in tempus et, porttitor a turpis. Aliquam erat volutpat. Etiam
        pellentesque sagittis massa, eu pellentesque ipsum. Aenean euismod
        tristique neque, vitae pharetra tortor vestibulum interdum. Phasellus id
        augue ante. Sed porta sit amet lacus sit amet laoreet. 
        
      
            </h5>
            
            


        
        </div>
    </body>
        

  
      
    );
  }
  export default Home;
  
