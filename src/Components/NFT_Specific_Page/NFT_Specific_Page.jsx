import React, { useContext } from 'react'
import './nft_specific_page.css'
import { Data_Context } from '../../Context/Data_Context';

const NFT_Specific_Page = (props) => {

    //NFT data
    const{item_var} = props;
    const {cartAdd} = useContext(Data_Context);

  return (
    <div className="nft-specific-body">
        <div className="left">
          <img src={item_var.image}/>
          
        </div>
        <div className="right">
          <h1>{item_var.name}</h1>
          <p>{item_var.description}</p>
          <button onClick={()=>{cartAdd(item_var.id)}}>Add to Cart</button>
        </div>
    </div>
  )
}

export default NFT_Specific_Page
