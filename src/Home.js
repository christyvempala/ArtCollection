import React, { useState,useContext,useRef } from 'react'
import {AppContext} from './AppContext'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import About from './About'
import {HashLink as Link} from 'react-router-hash-link'
function Home() {
  const {photos}=useContext(AppContext)
  const [state, setState] = useState(false)
  const [hide, setHide] = useState(true)
  
  return (
    <div>
    <div className="hero-section section-overlay">
      <div className="container">
        <div className="row">
          <div className="hero-content text-center col-12">
            <h1 className="art"><strong>Art Collections</strong></h1>
             <Link smooth to="#about">
              <button className="read-more" onClick={()=>{
                setState(!state)
                setHide(!hide)
              }
              }>{hide ? "READ MORE" : "READ LESS"}</button></Link>
              {state ?  <About/> : null  }
            
            {/*<Router>
            <Link to="/about" className="read-more ">Read More</Link>
            <Route path="/about"><About/>
                  </Route>
            </Router>*/}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home

