import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Top_rated.css';

const Main=(Props)=>{
    return(
        <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src={Props.src} alt="cb" className='img' />
                                <div className='info'>
                                    <h1>{Props.Name}</h1>
                                    <p>{Props.Desc}</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
    )

}


export const Toprated = () => {
   const data=[
   {   
    src:"https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    Name:"दिलवाले दुल्हनिया ले जायेंगे",
    Desc:"Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values."
   },
   {
    src:"https://image.tmdb.org/t/p/w500/eaf7GQj0ieOwm08rrvjJQNbN0kN.jpg",
    Name:"Cosas imposibles",
    Desc:"A widow who is tormented by the memory of her abusive husband befriends a young man."
   },
   {
    src:"https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    Name:"千と千尋の神隠し",
    Desc:"A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation"
   },
   {
    src:"https://image.tmdb.org/t/p/w500/6PlhouMCYktJmdFwS9XtqRZaTqc.jpg",
    Name:"12 Angry Men",
    Desc:"The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father"
   },
   {
    src:"https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    Name:"The Green Mile",
    Desc:"A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments."
   },
   {
    src:"https://image.tmdb.org/t/p/w500/z4lNqsc7uhSbtbniOS6r0fTIvv5.jpg",
    Name:"Hope",
    Desc:"After 8-year-old So-won narrowly survives a brutal sexual assault, her family labors to help her heal while coping with their own rage and grief."
   },
   {
    src:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    Name:"The Dark Knight",
    Desc:"Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent,"
   },
   {
    src:"https://image.tmdb.org/t/p/w500/z8sUN5x17pFHy033EsFfaozTKCl.jpg",
    Name:"Downton Abbey: A New Era",
    Desc:"The residents of Downton Abbey go on a new adventure that takes them to a Spanish villa"
   }
]

  return (
    <div>
        <div>
            <div className='h1 mh text-dark text-muted' id="Products">Top Rated </div>
            </div>
            <Container className='card-container'>
                <Row className='card-row1'>
                   {
                       data.map((obj,i)=>{
                           return <Main src={obj.src} Name={obj.Name} Desc={obj.Desc}/>
                       })
                   }
                    
                </Row>
            </Container>
    </div>
  )
}
