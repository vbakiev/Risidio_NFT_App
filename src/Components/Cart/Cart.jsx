import React, { useContext } from 'react'
import './cart.css'
import { Data_Context } from '../../Context/Data_Context'
import cart_remove_image from '../Images/cart_remove_icon.webp'


const Cart = () => {
    const {nft_data, cartNfts, cartRemove} = useContext(Data_Context);
  return (
    <div className='cart-items'>    
        {nft_data.map((e)=> {
            if(cartNfts[e.id] > 0){
                return <div>
                    <div className='cart-items-layout'>
                    <img className='cart-items-image' src={e.image}  alt='NFT item image' />
                    <p>{e.name}</p>
                    <p>£{e.price}</p>
                    {/* Add on click event > cartRemove function with the NFT's id*/}
                    <img className='cart-items-remove' src={cart_remove_image} onClick={()=> {cartRemove(e.id)}} alt='Remove item from cart clickable image'></img>
                </div>
                <hr />
            </div>
            }
        })}
    </div>
  )
}

export default Cart
