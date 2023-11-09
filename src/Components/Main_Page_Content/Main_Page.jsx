import React from 'react'
import './main_page.css'
import main_img from '../Images/Cars/Ferrari.jfif'
import { Link } from 'react-router-dom'

const Main_Page = () => {
  return (
      <div className='main'>
            <div className='left-side'>
                <h2>The Motor Majesty Collection</h2>
                <p>Introducing "MotorMajesty NFT Collection," a digital showcase celebrating the timeless allure of iconic automobiles. Each NFT within this collection is a pixelated masterpiece, a tribute to the golden era of automotive design and innovation. From the sleek lines of vintage Mustangs to the elegant curves of classic Mercedes, MotorMajesty encapsulates the spirit of automotive excellence. As proud owners of MotorMajesty NFTs, you're not just acquiring digital assets; you're gaining access to a community of enthusiasts who appreciate the artistry and legacy of iconic vehicles. Connect, share stories, and revel in the nostalgia that this diverse collection effortlessly evokes.</p>
                <Link to="/art"><button>Explore</button></Link>
            </div>
            <div className='right-side'>
                <Link to="/art"><img src={main_img} className='header-img'/></Link>
            </div>
    </div>
  )
}

export default Main_Page
