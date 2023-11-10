import React from 'react'
import './contact.css'
import community_img from '../Images/Community_image.png'

function ClearFields() {
  const name = document.getElementById('field_1').value;
  alert('Thank you for joining ' + name + ' please check your E-mail for further instructions!');

  document.getElementById('field_1').value = "";
  document.getElementById('field_2').value = "";
}

const Contact = () => {
  return (
    <div className='contact'>
        <img src={community_img} alt='An illustration of a Blockchain Community'/>
      <h1>Be a Part Of Our Blockchain Community</h1>
      <div className='contact-input'>
        <input id='field_1' type='name' placeholder='Name'/> <input id='field_2' type='email' placeholder='E-mail'/>
      </div>
      <button onClick={ClearFields}>Connect</button> 
    </div>
  )
}

export default Contact
