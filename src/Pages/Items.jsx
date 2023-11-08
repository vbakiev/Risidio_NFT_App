import React, { useContext } from 'react'
import { Data_Context } from '../Context/Data_Context'
import { useParams } from 'react-router-dom';
import NFT_Specific_Page from '../Components/NFT_Specific_Page/NFT_Specific_Page';

const Items = () => {

  //Get the data from Context
  const {nft_data} = useContext(Data_Context);
  
  //Component hook for reading route's dynamic params in URL
  const {itemId} = useParams();

  //Event handler contains information about the affected element
  const item_var = nft_data.find((e)=> e.id === Number(itemId));

  return (
    <div>
      <NFT_Specific_Page item_var={item_var}/>
    </div>
  )
}

export default Items
