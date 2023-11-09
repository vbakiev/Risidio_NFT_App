import React from 'react'
import './main_page.css'
import main_img from '../Images/NFT-Player/NFT_Multiverse.PNG'

const Main_Page = () => {
  return (
      <div className='main'>
            <div className='left-side'>
                <h2>Explore the Multiverse collection</h2>
                <p>Introducing the "NFT Multiverse" collection, a diverse and enchanting ensemble of digital player models, each offering a unique and captivating visual experience. From the fiery intensity of the "Inferno Gamer" to the cosmic wonder of the "Stellar Nebula Guardian," and the playful expressiveness of the "Emoji Enigma," this collection spans a rich spectrum of artistic and thematic styles, catering to every gaming enthusiast and collector's taste. Explore a world where art and gaming converge, and own a piece of the NFT Multiverse to express your individuality and style in the virtual realm.</p>
                <button>Explore</button>
            </div>
            <div className='right-side'>
                <img src={main_img} className='header-img'/>
            </div>
    </div>
  )
}

export default Main_Page
