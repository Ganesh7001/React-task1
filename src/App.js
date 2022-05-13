// import { useState } from 'react';
import React from 'react';
import './App.css';
import {Popular} from './Home/Popular/Popular';
import {Single} from './Single movie page/Single_movie';
import {Toprated} from './Top_rated/Top_rated'; 
import {Upcoming} from './Upcoming/upcoming'; 
import Navbar from './Navbar';
// import axios from 'axios';


function App(){
    

  
  return (  <div className='App'>
    
    <div>

        <Navbar/>
        <Popular/>
        <Toprated/>
        <Upcoming/>
        <Single/>
        
        
    </div>
    
    </div>
  );
  

  
}

export default App;