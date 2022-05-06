import { useState } from 'react';
import React from 'react';
import './App.css';
import {Popular} from './Home/Popular/Popular';
import {Single} from './Single movie page/Single_movie';
import {Toprated} from './Top_rated/Top_rated'; 
import {Upcoming} from './Upcoming/upcoming'; 
import Navbar from './Navbar';
import {HashRouter,Route,Routes, Link} from 'react-router-dom';
import axios from 'axios';


function App(){
    // const [users,setUsers]=useState([]);

    // const fnGetUsers=()=>{
    //   axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743')
    //   .then((res)=>{
    //       setUsers(res.data)
    //       debugger;
    //   },(res)=>{
    //      console.log("Error is not")
    //   })
    // }

    //  var data=users.results
    //  console.log(data)
  

  
  return (  <div>
    <div>
      
          {/* <button onClick={fnGetUsers}>Get Users</button> */}
          
          {/* {
             { users.results.map((obj,index)=>{
                  return <li key={index}>{obj.poster_path}</li>;
             })}
             
          } */}
          
      </div>
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