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
            <p>@2023 Risidio NFT. All right reserved.</p>
        </div>
        <ul className='footer-links'>
            <a href='https://risidio.com/' target='_blank' rel='noopener noreferrer'>
                <li>Company</li>
            </a>
            <a href='https://risidio.com/about' target='_blank' rel='noopener noreferrer'>
                <li>About</li>
            </a>
            <a href='https://risidio.com/' target='_blank' rel='noopener noreferrer'>
                <li>Contact</li>
            </a>
        </ul>
        <div className='footer-socials'>
            <a href='https://www.instagram.com/risidio_official/?hl=en-gb' target='_blank' rel='noopener noreferrer'>
            <img src={socials_instagram} alt='Instagram Link to Risidio Company account'></img>
            </a>
            <a href='https://www.linkedin.com/company/risidio/' target='_blank' rel='noopener noreferrer'>
            <img src={socials_linkedin} alt='LinkedIn Link to Risidio Company account'></img>
            </a>
            <a href='https://twitter.com/Risidio1' target='_blank' rel='noopener noreferrer'>
            <img src={socials_x} alt='X Link to Risidio Company account'></img>
            </a>
        </div>
    </div>
  )
}

export default Footer
