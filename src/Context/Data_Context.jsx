import React, { createContext, useState } from 'react';
import nft_data from '../Components/Database/nft_data'

//Context which allows data to be shared to our components
export const Data_Context = createContext(null);

//Iterate through all the nft data and store in cart object
const cartState = () =>{
    let cart = {};
    for (let i = 0; i < nft_data.length +1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const Data_Context_var = (props) =>{
    //React hook to tract the state of cart
    const [cartNfts, setCartNfts] = useState(cartState());

    //console.log(cartNfts);

    //Add to cart function
    const cartAdd = (itemId) =>{
        /*
        Update state of cart componenet
        (...prev) spread operator > create a shallow copy of cart array
        Take previous value of 'itemId' and increment by 1
        */
        setCartNfts((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartNfts);
    }

     //Remove from cart function
     const cartRemove = (itemId) =>{
        setCartNfts((prev) => ({...prev,[itemId]:prev[itemId]-1}))
        console.log(cartNfts);
    }

      //import all nft's data and cart values to variable
      const dataValues = {nft_data,cartNfts, cartAdd, cartRemove};

    //children value received by component
    return(
        <Data_Context.Provider value={dataValues}>
            {props.children}
        </Data_Context.Provider>
    )
}

export default Data_Context_var;