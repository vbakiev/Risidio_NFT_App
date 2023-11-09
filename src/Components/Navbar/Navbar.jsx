import React from 'react'
import './navbar.css'
import risidio_logo from '../Images/Risidio_logo.png'
import cart_logo from '../Images/Cart_logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={risidio_logo} alt='Risidio Company Logo'/>
      </div>
       <ul className='navbar-pages'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/art'>Motor Majesty</Link></li>
          <li><Link to='/music'>Melody Beasts</Link></li>
          <li><Link to='/food'>Joyful Juicies</Link></li>
          <li><Link to='/game'>Multiverse Player</Link></li>
       </ul>
      <div className='navbar-cart'>
        <Link className='cart-icon' to='/checkout'><img src={cart_logo} alt='Cart Logo'/></Link>
      </div>
    </div>
    </>
  )
}

export default Navbar
