import React, { useContext } from 'react'
import './Pages_CSS/nft_collections.css'
import { Data_Context } from '../Context/Data_Context'
import NFT from '../Components/NFT/NFT'

const NFT_Collections = (props) => {

    //Get data from Context
    const {nft_data} = useContext(Data_Context)
    
    //map function to iterate over all the data
  return (
    <div className="grid-container">
      <div className="nft-classes">
            {nft_data.map((item, i)=>{
                if(props.class === item.class){
                    return <NFT key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
                }
                else{
                    return null;
                }
            })}
      </div>
    </div>
  )
}

export default NFT_Collections
