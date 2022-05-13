import React from 'react'
import {NavLink} from "react-router-dom";



function NavBar(){
    return (
    <>
    <NavLink
        to ="/" 
        exact style={linkStyles}
        activeStyle={{ 
            background: "darkblue",
        }}
    >
        Home 
    </NavLink>

    <NavLink
        to="/about"
        exact style={linkStyles}
        activeStyle={{
            background: "darkblue",
        }}
        >
        Login
    </NavLink>
    </>
    );
}


const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };



export default NavBar;