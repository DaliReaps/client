import React from 'react'
import './Contacts.css'
import instalogo from'../instagram.png'
import phonelogo from'../phone.png'
import gmaillogo from'../gmail.png'
import facebooklogo from'../facebook.png'
const Contacts = () => {
  
  return (
    <div className='contact' style={{
      backgroundImage:"url('https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg')"
      ,backgroundSize:"100vw",
      minHeight:"100vh",
      backgroundRepeat:"no-repeat"
  }}>
    <a style={{backgroundColor:'white',width:'25%'}} className='horizontaldiv'href='https://www.instagram.com/chaouch.mohamedali/' target="_blank"><img src={instalogo}/><h3>Follow our instagram page </h3></a>
    <div style={{backgroundColor:'white',width:'25%',marginLeft:'25%'}} className='horizontaldiv'><img src={gmaillogo}/><h3>chaouch.dali1212 @gmail.com</h3></div>
    <div style={{backgroundColor:'white',width:'25%',marginLeft:'50%'}} className='horizontaldiv'><img src={phonelogo}/><h3>216 29513774</h3></div>
    <a style={{backgroundColor:'white',width:'25%',marginLeft:'75%'}} className='horizontaldiv' href='https://www.facebook.com/mohamedali.chaouch.37' target="_blank"><img src={facebooklogo}/><h3>Follow our facebook page </h3></a>
    </div>
  )
}

export default Contacts