import React from 'react'
import './cart_banner.css'
import banner_img from '../Components/Images/cart_img.png'
import safe_img from '../Components/Images/safe.webp'

const Cart_Banner = () => {
  return (
    <div className='cart-banner'>
        <div className="left">
            <img src={banner_img}></img>
            <img className='safe' src={safe_img}></img>
        </div>
    </div>
  )
}

export default Cart_Banner
