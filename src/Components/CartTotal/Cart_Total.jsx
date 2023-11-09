import React, { useContext } from 'react'
import { Data_Context } from '../../Context/Data_Context';
import './cart_total.css'

const Cart_Total = () => {

    const {cartTotal} = useContext(Data_Context);

  return (
    <div className="cart-total">
        <div className="cart-nfts-total">
            <p>Total: £{cartTotal()}</p>
            <button>Proceed to Checkout</button>
        </div>
    </div>
  )
}

export default Cart_Total
