import React, { useContext } from 'react'
import './nft_specific_page.css'

const NFT_Specific_Page = (props) => {

    //NFT data
    const{item_var} = props;

  return (
    <div className='nft-specific'>
      <div className="left">
        <img src={item_var.image}/>
        
      </div>
      <div className="right">
        <h1>{item_var.name}</h1>
        <p>{item_var.description}</p>
        <button>Add to Cart</button>
      </div>
      
    </div>
  )
}

export default NFT_Specific_Page
