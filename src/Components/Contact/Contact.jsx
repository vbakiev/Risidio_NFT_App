import React from 'react'
import './contact.css'
import community_img from '../Images/Community_image.png'

const Contact = () => {
  return (
    <div className='contact'>
        <img src={community_img} alt=''/>
      <h1>Be a Part Of Our Blockchain Community</h1>
      <div className='contact-input'>
        <input type='name' placeholder='Name'/> <input type='email' placeholder='E-mail'/>
      </div>
      <button>Connect</button> 
    </div>
  )
}

export default Contact
