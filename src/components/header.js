import React from "react"
import { Link } from "gatsby";


function MyButton(props)
{
  var className = props.selected? "w3-button w3-white w3-border w3-badge w3-jumbo w3-circle btn" :
  "w3-button w3-badge w3-jumbo w3-circle btn" 
  return (
    <div className = "w3-col l4 m4 w3-center">
      <Link to={props.link} className={className} >
          <div className = "btn-text ">
              <p>{props.firstLine}</p>
              <p>{props.secondLine}</p>
          </div>
      </Link>
    </div>
  );  
}

function MyMobileButton(props)
{
    var className = props.selected? "w3-bar-item w3-white w3-button mobile-nav" :
    "w3-bar-item w3-button mobile-nav" 
    return(
    <Link to={props.link}  className={className} > {props.text} </Link>
    )
}

function Navbar(props)
{
  return (
    <div>
      
      <div class=" w3-hide-small w3-hide-medium w3-row w3-center buttonrow" id="myNavbar">
      <MyButton firstLine = "Home"  selected = {props.selected[0]}/>
      <MyButton firstLine = "(more)"  secondLine = "About Me" selected = {props.selected[1]}/>
      <MyButton firstLine = "Projects" link = "/projects/" selected = {props.selected[2]}/>
      </div>

      <div class="w3-top w3-hide-large" id="myNavbar">
        <div className="w3-bar w3-black w3-hover-opacity-off w3-center w3-small">
            <MyMobileButton text = "HOME" selected = {props.selected[0]}/>
            <MyMobileButton text = "ABOUT" selected = {props.selected[1]}/>
            <MyMobileButton link = "/projects/" text = "PROJECTS" selected = {props.selected[2]}/>
        </div>
      </div>

    </div>

    
  );  
}

export default Navbar;
