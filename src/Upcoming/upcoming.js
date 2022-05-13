import React, {useState,useEffect} from 'react';
import './upcoming.css';
import { Container,Row, Col, ModalBody} from 'react-bootstrap';
import {Modal, ModalHeader} from "reactstrap";


const API_IMG="https://image.tmdb.org/t/p/w500"
const Reuse=({title,poster_path,overview,vote_average,release_date})=>{
  const [modal,setmodal]=useState(false)

return (<Col className='card-row'>
          <div className='wrapper'>
           <div className='card'>
              <img  src={API_IMG+poster_path} alt="cb" className='img' />
               <div className='info'>
               <h1 style={{textAlign:'center'}}>{title}</h1>
                <Modal
                size='lg'
                isOpen={modal}
                toggle={()=>setmodal(!modal)}>
                  <ModalHeader
                     toggle={()=>setmodal(!modal)}>
                  Movie Details
                  </ModalHeader>
                  <ModalBody> 
                  <div>
                 <img className='card-img-top' style={{width:"25rem"}}src={API_IMG+poster_path}/>
                 <h1>{title}</h1> 
                <h4>IMDb:{vote_average}</h4>
                <h5>Release Date:{release_date}</h5>
                <br/>
                <h2>Overview</h2>
                <h4 style={{color:'grey'}}>{overview}</h4>
               </div>
                  
                  </ModalBody>
                </Modal>
                <button type="button" className='btn btn-dark' onClick={()=>setmodal(true)}>Click here </button> 

                </div>
               </div>
             </div>
           </Col>)


}

const API_URL="https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743"

export const Upcoming = () => {
    const [movies, setMovies]=useState([]);

    useEffect(()=>{
      fetch(API_URL)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data);
        setMovies(data.results);
      })
    
    },[]) 



    return (
        <div>
         <div>
            <div className='h1 mh  text-dark text-muted'id="Products">Upcoming movies</div>
            </div>
            
            <Container className='card-container'>
                <Row className='card-row1'>

                {
                    
                    movies.map((movieReq)=><Reuse key={movieReq.id} {...movieReq}/>)
                }  
                    
                </Row>
            </Container>
        </div>
    )
}
