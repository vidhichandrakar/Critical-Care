import React, { Fragment } from "react";
import Home from "../../Media/Images/Header_wallpaper.png";
import { Box, Typography } from "@mui/material";
export const NavHome =()=>{
  return(
   <Fragment>
    <div className="homeImage">
      
    <img src={Home} />
   
    </div>
    <div className="cardHome">
       <h1>ghvdfhsb</h1>
    </div>
    </Fragment> 
  )
}