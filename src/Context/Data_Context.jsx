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
    const cartAdd = (itemId) => {
        /*
            Update state of cart componenet
            (...prev) spread operator > create a shallow copy of cart array
            Take previous value of 'itemId' and increment by 1
        */
        setCartNfts((prev) => {
          const updatedCart = { ...prev };
          
          // Check if the item is already in the cart
          if (updatedCart[itemId]) {
            updatedCart[itemId] += 1;
          } else {
            updatedCart[itemId] = 1;
          }
          return updatedCart;
        });
      };

      //Remove from cart function
    const cartRemove = (itemId) => {

        setCartNfts((prev) => {
          const updatedCart = { ...prev };
      
          // Check if the item is in the cart
          if (updatedCart[itemId]) {
          // If yes, remove item of type
            updatedCart[itemId] = 0;
          }
          return updatedCart;
        });
      };


    const cartTotal = () => {
        let cartTotalAmount = 0;

        for(const index in cartNfts){
            if(cartNfts[index] > 0){
                let itemValue = nft_data.find((item_var) => item_var.id === Number(index));
                cartTotalAmount += itemValue.price;
            }
        }
            return cartTotalAmount;
    }

      //import all nft's data, cart values and functions to a variable
      const dataValues = {nft_data, cartNfts, cartAdd, cartRemove, cartTotal};

    //Allow context to be accessed from other componenets
    return(
        <Data_Context.Provider value={dataValues}>
            {props.children}
        </Data_Context.Provider>
    )
}

export default Data_Context_var;