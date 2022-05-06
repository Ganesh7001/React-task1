import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Top_rated.css';

export const Toprated = () => {
  return (
    <div>
        <div>
            <div className='h1 mh text-dark text-muted' id="Products">Top Rated </div>
            </div>
            <Container className='card-container'>
                <Row className='card-row1'>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>दिलवाले दुल्हनिया ले जायेंगे</h1>
                                    <p>Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values.</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/n6PvMAKL66gavIFxOyRB6czAeQO.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>The Godfather</h1>
                                    <p>Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family..</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/eaf7GQj0ieOwm08rrvjJQNbN0kN.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>Cosas imposibles</h1>
                                    <p>A widow who is tormented by the memory of her abusive husband befriends a young man.</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>千と千尋の神隠し</h1>
                                    <p>A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/6PlhouMCYktJmdFwS9XtqRZaTqc.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>12 Angry Men</h1>
                                    <p>The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father.</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>The Green Mile</h1>
                                    <p>A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments.</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/z4lNqsc7uhSbtbniOS6r0fTIvv5.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>Hope</h1>
                                    <p>After 8-year-old So-won narrowly survives a brutal sexual assault, her family labors to help her heal while coping with their own rage and grief.</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>The Dark Knight</h1>
                                    <p>Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent,</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
    </div>
  )
}
