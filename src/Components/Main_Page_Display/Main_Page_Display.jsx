import React from 'react'
import './main_page_display.css'

import one_img from '../Images/Templates/one.svg'
import two_img from '../Images/Templates/two.svg'
import three_img from '../Images/Templates/three.svg'
import four_img from '../Images/Templates/four.svg'


const Main_Page_Display = () => {
  return (
 
    <div className="main-display">
      <div className='display-title'>
        <h2 className='title'>Explore all collections</h2>
      </div>
      <div className='display'>
        <div className='collection'>
              <img src={one_img} alt=''/>
              <div className='text'>Example Text</div>
          </div>
          <div className='collection'>
              <img src={two_img}  alt=''/>
              <div className='text'>Example Text</div>
          </div>
          <div className='collection'>
              <img src={three_img}  alt=''/>
              <div className='text'>Example Text</div>
          </div>
          <div className='collection'>
              <img src={four_img}  alt=''/>
              <div className='text'>Example Text</div>
          </div>
      </div>
    </div>
 
  )
}

export default Main_Page_Display
