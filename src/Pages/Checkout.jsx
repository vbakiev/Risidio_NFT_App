import React from 'react'
import Cart from '../Components/Cart/Cart'
import Cart_Total from '../Components/CartTotal/Cart_Total'
import Cart_Banner from '../Cart_Banner/Cart_Banner'

const Checkout = () => {
  return (
    <div>
      <Cart/>
      <Cart_Total/>
      <Cart_Banner/>
    </div>
  )
}

export default Checkout
