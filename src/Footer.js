import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
function Footer() {
    return (
        <div className="socialfollow">
            ArtCollection
           <a href="https://www.facebook.com/"className="facebook social">
            <FontAwesomeIcon icon={faFacebook}  /></a>
            <a href="https://www.instagram.com/art.collection20/"className="instagram social">
            <FontAwesomeIcon icon={faInstagram}  /></a>
        </div>
    )
}

export default Footer

