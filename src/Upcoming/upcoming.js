import React from 'react';
import './upcoming.css';
import { Container, Row, Col } from 'react-bootstrap';


const Reused=(Props)=>{
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

export const Upcoming = () => {

    const data=[
        {   
         src:"https://image.tmdb.org/t/p/w500/2n95p9isIi1LYTscTcGytlI4zYd.jpg",
         Name:"The Outfit",
         Desc:"Leonard is an English tailor who used to craft suits on London’s world-famous Savile Row. After a personal tragedy, he’s ended up in Chicago, operating a small tailor shop in a rough part of town where he makes beautiful clothes "
        },
        {
         src:"https://image.tmdb.org/t/p/w500/zGPLpljwrlK2y7AWXVpGx0ceIyH.jpg",
         Name:"The Bad Guys",
         Desc:"When the infamous Bad Guys are finally caught after years of countless heists and being the world’s most-wanted villains, Mr. Wolf brokers a deal to save them all from prison."
        },
        {
         src:"https://image.tmdb.org/t/p/w500/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg",
         Name:"The Northman",
         Desc:"Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother."
        },
        {
         src:"https://image.tmdb.org/t/p/w500/geYUecpFI2AonDLhjyK9zoVFcMv.jpg",
         Name:"Yuta Okkotsu",
         Desc:"Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone."
        },
        {
         src:"https://image.tmdb.org/t/p/w500/9SISFlf6SEiIb7CMk8h0Gu3NYow.jpg",
         Name:"The Green Mile",
         Desc:"A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments."
        },
        {
         src:"https://image.tmdb.org/t/p/w500/z4lNqsc7uhSbtbniOS6r0fTIvv5.jpg",
         Name:"The Medium",
         Desc:"A horrifying story of a shaman’s inheritance in the Isan region of Thailand. But the goddess that appears to have taken possession of a family member turns out not be as benevolent as it first appears"
        },
        {
         src:"https://image.tmdb.org/t/p/w500/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg",
         Name:"The Novice",
         Desc:"A college freshman joins her university's rowing team and undertakes an obsessive physical and psychological journey to make it to the top varsity boat"
        },
        {
        src:"https://image.tmdb.org/t/p/w500/kk28Lk8oQBGjoHRGUCN2vxKb4O2.jpg",
         Name:"The Novice",
         Desc: "A college freshman joins her university's rowing team and undertakes an obsessive physical and psychological journey to make it to the top varsity boat"
        }
     ]
     


    return (
        <div>

            <div>
            <div className='h1 mh text-dark text-muted' id="Products">Up-Coming</div>
            </div>
            <Container className='card-container'>
                <Row className='card-row1'>

                {
                    data.map((Object,i)=>{
                        return <Reused src={Object.src} Name={Object.Name} Desc={Object.Desc}/>
                    })
                }
                    
                </Row>
            </Container>
        </div>
    )
}
