import React from 'react'
import './navbar.css'
import risidio_logo from '../Images/Risidio_logo.png'
import cart_logo from '../Images/Cart_logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={risidio_logo} alt='Risidio Company Logo'/>
      </div>
       <ul className='navbar-pages'>
          <li>Main</li>
          <li>Game</li>
          <li>Art</li>
          <li>Music</li>
       </ul>
      <div className="navbar-cart">
        <img src={cart_logo} alt='Cart Logo'/>
      </div>
    </div>
  )
}

export default Navbar
