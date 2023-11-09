import React from 'react'
import './main_page_display.css'

import one_img from '../Images/Cars/BMW.jfif'
import two_img from '../Images/Fruits/Pineapple.jfif'
import three_img from '../Images/Music_Animals/Rabbit.jfif'
import four_img from '../Images/NFT-Player/Chroma_Champion.PNG'
import { Link } from 'react-router-dom'


const Main_Page_Display = () => {
  return (
 
    <div className="main-display">
      <div className='display-title'>
        <h2 className='title'>Explore all collections</h2>
      </div>
      <div className='display'>
        <div className='collection'>
              <Link to='/art'><img src={one_img} alt=''/></Link>
              <div className='text'>Motor Majesty</div>
          </div>
          <div className='collection'>
              <Link to='/food'><img src={two_img}  alt=''/></Link>
              <div className='text'>Joyful Juicies</div>
          </div>
          <div className='collection'>
              <Link to='/music'><img src={three_img}  alt=''/></Link>
              <div className='text'>Melody Beasts</div>
          </div>
          <div className='collection'>
              <Link to='/game'><img src={four_img}  alt=''/></Link>
              <div className='text'>Multiverse</div>
          </div>
      </div>
    </div>
 
  )
}

export default Main_Page_Display
