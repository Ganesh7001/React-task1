import React from 'react';
import './upcoming.css';
import { Container, Row, Col } from 'react-bootstrap';


export const Upcoming = () => {


    return (
        <div>

            <div>
            <div className='h1 mh text-dark text-muted' id="Products">Up-Coming</div>
            </div>
            <Container className='card-container'>
                <Row className='card-row1'>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src= 'https://image.tmdb.org/t/p/w500/2n95p9isIi1LYTscTcGytlI4zYd.jpg' alt="cb" className='img' />
                                <div className='info'>
                                    <h1>The Outfit</h1>
                                    <p>Leonard is an English tailor who used to craft suits on London’s world-famous Savile Row. After a personal tragedy, he’s ended up in Chicago, operating a small tailor shop in a rough part of town where he makes beautiful clothes </p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/zGPLpljwrlK2y7AWXVpGx0ceIyH.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>The Bad Guys</h1>
                                    <p>When the infamous Bad Guys are finally caught after years of countless heists and being the world’s most-wanted villains, Mr. Wolf brokers a deal to save them all from prison.</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>The Northman</h1>
                                    <p>Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother.</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/geYUecpFI2AonDLhjyK9zoVFcMv.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>Yuta Okkotsu</h1>
                                    <p>Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone.</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/9SISFlf6SEiIb7CMk8h0Gu3NYow.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>The Medium</h1>
                                    <p>A horrifying story of a shaman’s inheritance in the Isan region of Thailand. But the goddess that appears to have taken possession of a family member turns out not be as benevolent as it first appears</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>The Novice</h1>
                                    <p>A college freshman joins her university's rowing team and undertakes an obsessive physical and psychological journey to make it to the top varsity boat</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/kk28Lk8oQBGjoHRGUCN2vxKb4O2.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>The Novice</h1>
                                    <p>A college freshman joins her university's rowing team and undertakes an obsessive physical and psychological journey to make it to the top varsity boat</p>
                                    <a href='#' className='btn'>Shop Now </a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='card-row'>
                        <div className='wrapper'>
                            <div className='card'>
                                <img src="https://image.tmdb.org/t/p/w500/z8sUN5x17pFHy033EsFfaozTKCl.jpg" alt="cb" className='img' />
                                <div className='info'>
                                    <h1>Downton Abbey: A New Era</h1>
                                    <p>The residents of Downton Abbey go on a new adventure that takes them to a Spanish villa</p>
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
