import React from 'react';
import './Popular.css';
import { Container, Row, Col } from 'react-bootstrap';


export const Popular = () => {


    return (
        <div>

            <div>
            <div className='h1 mh  text-dark text-muted'id="Products">Popular movies</div>
            </div>
            <Container className='card-container'>
                <Row className='card-row1'>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/eIUixNvox4U4foL5Z9KbN9HXYSM.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>La Abuela</h1>
                                    <p>A Paris model must return to Madrid where her grandmother, who raised her, has had a stroke.</p>
                                    <a href='#' className='btn'>Click here </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>Uncharted</h1>
                                    <p>A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother</p>
                                    <a href='#' className='btn'>Click here </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/zBG5Mg29NH9xxpWMMG7BIvKwYhL.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>365 Day</h1>
                                    <p>Laura and Massimo are back and hotter than ever. But the reunited couple's new beginning is complicated by Massimo’s family ties and a mysterious man who enters Laura’s life to win her heart and trust, at any cost</p>
                                    <a href='#' className='btn'>Click here </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>Spider-Man: No Way Home</h1>
                                    <p>Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero.</p>
                                    <a href='#' className='btn'>Click here </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>Sonic the Hedgehog 2</h1>
                                    <p>After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero.</p>
                                    <a href='#' className='btn'>Click here </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>Turning Red</h1>
                                    <p>Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.</p>
                                    <a href='#' className='btn'>Click here </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>The Bad Guys</h1>
                                    <p>When the infamous Bad Guys are finally caught after years of countless heists and being the world’s most-wanted villains</p>
                                    <a href='#' className='btn'>Click here </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/abPQVYyNfVuGoFUfGVhlNecu0QG.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>Pil</h1>
                                    <p>Pil, a little vagabond girl, lives on the streets of the medieval city of Roc-en-Brume, along with her three tame weasels.</p>
                                    <a href='#' className='btn'>Click here </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}
