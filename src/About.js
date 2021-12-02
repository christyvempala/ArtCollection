import {React,useState} from 'react'
import './About.css'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import AboutArt from './AboutArt'
import AboutMe from './AboutMe'
import {HashLink as Link1} from 'react-router-hash-link'
import ScrollUp from './ScrollUp'
function About() {
    const [state, setState] = useState(false)
    const [mystate,setMystate] = useState(false)
    return (
        <div className="about" id="about">
          <div className="about-section section pt-120 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="about-item">
                            <Router>
                                
                                <Link className="image" to="/aboutart">
                                    <img onClick={()=>setState(!state)}className="mypic1"src="https://rukminim1.flixcart.com/image/416/416/ji3g70w0/art-craft-kit/h/c/y/24-color-art-colored-drawing-pencil-set-bgoing-premier-colored-original-imaf5ywjmmxzgyjt.jpeg?q=70"></img>
                                </Link>{state ? <AboutArt/> : null}
                                
                            </Router>
                            <h4 className="title">About Art Collections</h4>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="about-item">
                        <Router>
                                <Link className="image" to="/aboutme">
                                    <img onClick={()=>setMystate(!mystate)}className="mypic"src="christy_s.jpg"></img>
                                </Link>{mystate ? <AboutMe/> : null}
                                
                            </Router>
                            <h4 className="title">About Me</h4>
                        </div>
                    </div>
                    <ScrollUp/>
                </div>
            </div>
          </div>
        </div>
    )
}

export default About
