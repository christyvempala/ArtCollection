import React, { useState } from 'react'
import './ContactUs.css'
import { db } from './firebaseConfig'

function ContactUs() {
    

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    
    
    
    const handleSubmit=(e)=>
    {
       
        e.preventDefault();
        db.collection('contactme').add({
            name:name,
            email:email,
            message:msg,
        })
        .then(()=>
        {
            
            alert('Your Message has been successgully submitted')
        })
        .catch(error=>
            {
               
                alert(error.message)
            })
            setName("")
            setMsg("")
            setEmail("")
    }
    return (
        <div className="container">
            <div className="row-justify-content-end">
               <div className="col-lg-12 col-md-12 col-sm-12">
                   <div className="contact-section-warpper">
                       <div className="contact-info aos-init aos-animate" data-aos="fade-up">
                           <span className="mail">
                               <a className="alink"href="mailto:acrylic.arts000@gmail.com" > acrylic.arts000@gmail.com</a>
                           </span>
                       </div>
                       <div className="contact-form aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
                           <form className="contact-form action="onSubmit={handleSubmit}>
                               <div className="row">
                                   <div className="col-md-6">
                                       <div className="single-form">
                                           <input type="text" name="name" placeholder="Enter your name..." value={name} onChange={(e)=>
                                        {
                                            setName(e.target.value)
                                        }}></input>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="single-form">
                                           <input type="email" name="email" placeholder="Enter your email..." value={email} onChange={(e)=>
                                        {
                                            setEmail(e.target.value)
                                        }}></input>
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="single-form">
                                           <textarea name="message" placeholder="Here goes your message..." value={msg} onChange={(e)=>
                                        {
                                            setMsg(e.target.value)
                                        }}></textarea>
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="form-btn">
                                           <button type="submit">Send Message</button>
                                       </div>
                                    </div> 
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
            </div>
        </div>
      

    )
   
}

export default ContactUs
