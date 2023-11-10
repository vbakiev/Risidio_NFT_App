import React, { useEffect } from 'react'
import './navbar2.css'
import risidio_logo from '../Images/Risidio_logo.png'
import cart_logo from '../Images/Cart_logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

  //Function to Open and Close "hamburger" navbar icon
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });

      //Automaticaly close navbar icon on entering another page
      document.querySelectorAll(".nav-link").forEach(n =>
        n.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        })
      );
    }

    // Clean up event listeners when the component unmounts
    //  Make sure EventListeners do not load before the DOM is fully loaded
    return () => {
      if (hamburger && navMenu) {
        hamburger.removeEventListener("click", () => {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(n =>
          n.removeEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
          })
        );
      }
    };
  }, []);

  //Navbar skeleton
  return (
    <div className="navbar">
      <div className="nav-branding">
        <Link to='/'> <img src={risidio_logo} alt='Risidio Company Logo'/></Link>
      </div>
       <ul className="nav-menu">
          <li className="nav-item">
            <Link className="nav-link" to='/art'>Motor Majesty</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/music'>Melody Beasts</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/food'>Joyful Juicies</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/game'>Multiverse Player</Link>
          </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/checkout'><img src={cart_logo} alt='Cart Logo'/></Link>
          </li>
       </ul>
       <div className="hamburger">
          <span className='bar'></span> 
          <span className='bar'></span> 
          <span className='bar'></span> 
       </div>
    </div>
  )
}

export default Navbar
