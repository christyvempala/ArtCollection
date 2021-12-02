
import React, { useContext } from 'react'
import { AppContext } from './AppContext'
import './Instagram.css'
import ScrollUp from './ScrollUp'
function Instagram() {

    const {photos}=useContext(AppContext)
    return (
      <div className="posterdiv">
        { 
           photos.map((obj)=>
           
           {
               return(
                   
                   <a href={obj.media_url}>
                <img className="poster" alt="poster" src={obj.media_url} pagination={true}/>
                </a>
                  
               )
           }
           
           )     
             
        }
        <ScrollUp/>
        </div>
    )
  
}

export default Instagram
