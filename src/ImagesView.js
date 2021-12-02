import React from 'react'
import {TOKEN} from './Constants'
import { InstagramGallery } from "instagram-gallery"
import './ImagesView.css'
function ImagesView() {
    return (
        <div className="ImageViewdiv">
         <InstagramGallery className="instagram-image" accessToken={`${TOKEN}`} count={24} pagination={true}/>
        </div>
    )
}

export default ImagesView
