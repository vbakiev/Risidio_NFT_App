import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Data_Context_var from './Context/Data_Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Provide access to data for all pages
   <Data_Context_var>
         <App />
   </Data_Context_var>
)
