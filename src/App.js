import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Import React Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import NFT_Collections from './Pages/NFT_Collections';
import Items from './Pages/Items';
import Checkout from './Pages/Checkout';

//Routes to all the pages
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<NFT_Collections class="game"/>}/>
        <Route path='/art' element={<NFT_Collections class="art"/>}/>
        <Route path='/music' element={<NFT_Collections class="music"/>}/>
        <Route path='/food' element={<NFT_Collections class="food"/>}/>
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
