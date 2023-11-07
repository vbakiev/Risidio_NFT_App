import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Quote from './Components/Quote/Quote';

function App(){
  return(
    <div>
      <Navbar/>
      <Quote/>
      <Footer/>
    </div>
  )
}

export default App;
