

import React from 'react';
import {
    BrowserRouter as Router,
   
  } from "react-router-dom";
import App from './App.js';

  
function newRouter() {
    return (
     
    <Router>
    <App/>
   </Router>
  
    );
  }
  
  export default newRouter;