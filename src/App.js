

import './App.css'
import Header from './Header';
import Footer from './Footer';
import {AppContext} from './AppContext'
import { useEffect, useState } from 'react';
import { ROOT_URL, TOKEN,IMAGEURL } from './Constants'
import axios from 'axios'

function App() {
  const [photos, setPhotos] = useState([])
  const[images,setImage]=useState([])
 // const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
  useEffect(() => {
      axios.get(`${ROOT_URL}/me/media?fields=media_url,permalink,media_id,id,media_type&access_token=${TOKEN}`).then((response)=>
          {
              var newphotos=response.data.data
              console.log(response.data)
              setPhotos([newphotos][0])
              console.log(photos)
          })
     
  }, [])
  
    
  return (
    <div >
    <AppContext.Provider value={{photos}}> 
   <Header/>
  <Footer/>
  </AppContext.Provider>
    </div>
  );
}

export default App;
