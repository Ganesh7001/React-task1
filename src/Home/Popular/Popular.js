import React from 'react';
import './Popular.css';
import { Container, Row, Col } from 'react-bootstrap';


const Reuse=(props)=>{


return (<Col className='card-row'>
          <div className='wrapper'>
           <div className='card'>
              <img  src={props.src} alt="cb" className='img' />
               <div className='info'>
                <h1>{props.head}</h1>
                <p>{props.desc}</p>
                <a href='#' className='btn'>Click here </a>
                </div>
               </div>
             </div>
           </Col>)


}


export const Popular = () => {
const data=[
    {
        src:"https://image.tmdb.org/t/p/w500/eIUixNvox4U4foL5Z9KbN9HXYSM.jpg",
        head:"La Abuela",
        Desc:"A Paris model must return to Madrid where her grandmother, who raised her, has had a stroke"
    },
    {
        src:"https://image.tmdb.org/t/p/w500/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg",
        head:"Uncharted",
        Desc:"A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother"
    },
    {
        src:"https://image.tmdb.org/t/p/w500/zBG5Mg29NH9xxpWMMG7BIvKwYhL.jpg",
        head:"365 Day",
        Desc:"Laura and Massimo are back and hotter than ever. But the reunited couple's new beginning is complicated by Massimo’s family ties and a mysterious man who enters Laura’s life to win her heart and trust, at any cost"
    },
    {
        src:"https://image.tmdb.org/t/p/w500/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
        head:"Spider-Man: No Way Home",
        Desc:"Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero."
    },
    {
        src:"https://image.tmdb.org/t/p/w500/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
        head:"Sonic the Hedgehog 2",
        Desc:"After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero."

    },
    {
        src:"https://image.tmdb.org/t/p/w500/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
        head:"Turning Red",
        Desc:"Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda."
    },
    {
        src:"https://image.tmdb.org/t/p/w500/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
        head:"The Bad Guys",
        Desc:"When the infamous Bad Guys are finally caught after years of countless heists and being the world’s most-wanted villains"
    },
    {
        src:"https://image.tmdb.org/t/p/w500/abPQVYyNfVuGoFUfGVhlNecu0QG.jpg",
        head:"Pil",
        Desc:"Pil, a little vagabond girl, lives on the streets of the medieval city of Roc-en-Brume, along with her three tame weasels."
    }
]


    return (
        <div>
         <div>
            <div className='h1 mh  text-dark text-muted'id="Products">Popular movies</div>
            </div>
            
            <Container className='card-container'>
                <Row className='card-row1'>

                {
                    data.map((obj,i)=>{
                        return <Reuse src={obj.src} head={obj.head} desc={obj.desc}/>
                    })
                }  
                    
                </Row>
            </Container>
        </div>
    )
}
