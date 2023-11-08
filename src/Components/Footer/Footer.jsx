import React from 'react'
import './footer.css'
import risidio_logo from '../Images/Risidio_logo.png'
import socials_instagram from '../Images/socials_instagram.webp'
import socials_x from '..//Images/socials_x.webp'
import socials_linkedin from '../Images/socials_linkedin.webp'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={risidio_logo} alt='Risidio Compant Logo'/>
        </div>
        <div className='footer-copyright'>
            <p>@2023 Risidio NFT. ALl right reserved.</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-socials'>
            <img src={socials_instagram} alt='Instagram Link to Risidio Company account'></img>
            <img src={socials_linkedin} alt='LinkedIn Link to Risidio Company account'></img>
            <img src={socials_x} alt='X Link to Risidio Company account'></img>
        </div>
    </div>
  )
}

export default Footer
