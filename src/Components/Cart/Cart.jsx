import React, { useContext } from 'react'
import './cart.css'
import { Data_Context } from '../../Context/Data_Context'
import cart_remove_image from '../Images/cart_remove_icon.webp'


const Cart = () => {
    const {nft_data, cartNfts, cartRemove, cartTotal, cartTotalItem} = useContext(Data_Context);
  return (
    <div className='cart'>
        <div className='cart-nfts'>    
            {nft_data.map((e)=> {
                if(cartNfts[e.id] > 0){
                    return <div>
                        <div className='cart-nfts-layout'>
                        <img className='cart-nfts-image' src={e.image}  alt='NFT image' />
                        <p>{e.name}</p>
                        <p>£{e.price}</p>
                        {/* Add on click event > cartRemove function with the NFT's id*/}
                        <div>
                        <img className='cart-remove' src={cart_remove_image} onClick={()=> {cartRemove(e.id)}} alt='Remove item from cart clickable image'></img>
                        <p>Remove</p>
                        </div>
                    </div>
                    <hr />
                </div>
                }
            })}
        </div>
    </div>
  )
}

export default Cart
