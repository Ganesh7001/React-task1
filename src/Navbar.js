import React,{useState,useEffect} from 'react';
import './Navbar.css'
import { Toprated } from './Top_rated/Top_rated';
import {HashRouter,Route,Routes} from 'react-router-dom';
import {Popular} from './Home/Popular/Popular';
import {Upcoming} from './Upcoming/upcoming'; 
import {Container,Nav,Form,FormControl,Button} from 'react-bootstrap';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743"
function Navbar(){
  const [movies, setMovies]=useState([]);
  const[query,setQuery]=useState("");

  useEffect(()=>{
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  
  },[]) 


  const searchMovie=async(e)=>{
    e.preventDefault();
    console.log("Searching")
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=1`
      const res=await fetch(url);
      const data=await res.json();
      console.log(data);
      setMovies(data.results)
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandeler=(e)=>{
    setQuery(e.target.value);

  }

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
      <form className="d-flex" onSubmit={searchMovie}>
        <FormControl type="search" placeholder="Movie Search" className="me-2" aria-label="Search" name="query" value={query} onChange={changeHandeler}>
        </FormControl>
        <Button varient="secondary" type="submit">Search</Button>
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
