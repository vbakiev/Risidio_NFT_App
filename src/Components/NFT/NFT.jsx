import React from 'react'
import './nft.css'
import { Link } from 'react-router-dom'

const NFT = (props) => {
  return (
    <div className='nft'>
        <Link to={`/item/${props.id}`}> <img src={props.image}/></Link>
        <p>{props.name}</p>
        <div className='price'>
            £{props.price}
        </div>
    </div>
  )
}

export default NFT
