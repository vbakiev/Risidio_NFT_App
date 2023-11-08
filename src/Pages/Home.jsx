//Home Page

import React from 'react'
import Main_Page from '../Components/Main_Page_Content/Main_Page'
import Quote from '../Components/Quote/Quote'
import Main_Page_Display from '../Components/Main_Page_Display/Main_Page_Display'
import Contact from '../Components/Contact/Contact'

const Home = () => {
  return (
    <div>

      <Main_Page/>
      <Main_Page_Display/>
      <Quote/>
      <Contact/>

    </div>
  )
}

export default Home
