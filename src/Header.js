import React, { useState } from 'react'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import {Navbar,Nav,Container} from 'react-bootstrap'
import Home from './Home' 
import ContactUs from './ContactUs'
import './custom.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import Instagram from './Instagram'
function Header() {
  const [expanded, setExpanded] = useState(false);

    return (
      <div className="header-section section sticker">
        <div className="container custom container">
          <div className="row">
            <div className="col-12">
              <div className="header-top">
               <img className="logo fixed-top"src="AC1.png"/>
               
               <Router> 
                  <Navbar transparent variant="dark"expand="lg" expanded={expanded}>
                    <Container fluid>
                        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                              <Link to="/" className="nav-link " onClick={() => setExpanded(false)}>Home</Link>
                              <Link to="/gallery" className="nav-link " onClick={() => setExpanded(false)}>Gallery</Link>
                              <Link to="/contactus" className="nav-link" onClick={() => setExpanded(false)}>Contact Me</Link> 
                            </Nav>
                          </Navbar.Collapse>
                      </Container>
                    </Navbar>
                    <Switch>
                    <Route path="/gallery">
                      <Instagram/>
                    </Route>
                    <Route path="/contactus">
                      <ContactUs />
                    </Route>
                    <Route path="/">
                      <Home/>
                    </Route>
                    </Switch>
               
                </Router>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header
