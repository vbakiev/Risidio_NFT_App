import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Import React Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Quote from './Components/Quote/Quote';
import Home from './Pages/Home';
import NFT_Classes from './Pages/NFT_Classes';
import Items from './Pages/Items';
import Checkout from './Pages/Checkout';

function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<NFT_Classes category="game"/>}/>
        <Route path='/art' element={<NFT_Classes category="art"/>}/>
        <Route path='/music' element={<NFT_Classes category="music"/>}/>
        <Route path='/item' element={<Items/>}>
          <Route path=':itemId' element={<Items/>}/>
        </Route>
        <Route path='/checkout' element={<Checkout/>}/>

      </Routes>

      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
