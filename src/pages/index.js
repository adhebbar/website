import React, { Component } from "react";
import Navbar from "../components/header"

function BigText(props)
{
  return (
    <div className = "w3-row w3-padding-64">
    <h1 className = "w3-center bigText">
      <p>Hello,</p>
      <p>I'm Aditi</p>
    </h1> 
    </div>
  );
}

function MediumText(props)
{
  return (
    <div className = "w3-content w3-center">
    <h3 className = "mediumText w3-center">
      {props.text} 
    </h3>
    </div>
  );
}

export default () => (
  
  <div>

    <Navbar selected = {[true, false, false]}/>

    <BigText/>
    <MediumText text = "I’m an engineering major with interests accross the 
          stack - from Firmaware Engineering at Apple to design and front-end web 
          developement of this website. "/>
  </div>

)