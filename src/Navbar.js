import React from 'react';
import './Navbar.css'
import { Toprated } from './Top_rated/Top_rated';
import {HashRouter,Route,Routes, Link} from 'react-router-dom';
import {Popular} from './Home/Popular/Popular';
import {Upcoming} from './Upcoming/upcoming'; 


function Navbar(){
return (
  <div>
<nav className="navbar navbar-expand-lg  navbar-dark bg-dark" id='sticky'>
  <div className="container-fluid">
    <a className="navbar-brand" >MovieDb</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#/Popular">Popular</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Toprated">Top Rated</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Upcoming">Upcoming</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Movie Name" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>


<HashRouter>
        
        <Routes>
             <Route exact path='/' element={<Popular/>}/>
            <Route exact path='/Popular' element={<Popular/>}/>
            <Route exact path='/Toprated' element={<Toprated/>}/>
            <Route exact path='/Upcoming' element={<Upcoming/>}/>
        </Routes>
        
</HashRouter> 

</div>

     

)}
export default Navbar;