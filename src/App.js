import React from 'react';
import Page1 from './containers/Page1' 
import Page2 from './containers/Page2' 

import  {BrowserRouter ,Route } from "react-router-dom"

import "./App.css";

function App() {
  return (
    <BrowserRouter >

    <div className="">
      <div >
      <Route exact path="/" render={props=>{
       return <Page1/>
      }}/>
      <Route exact path="/page2" render={props=>{
       return <Page2/>
      }}/>
      </div>
      
    </div>
    </BrowserRouter >

  );
}

export default App;
