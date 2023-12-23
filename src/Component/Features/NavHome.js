import React, { Fragment } from "react";
import Home from "../../Media/Images/Header_wallpaper.png";
import AppImage from "../../Media/Images/home_top_img2.png";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
export const NavHome =()=>{
  return(
   <Fragment>
    <div className="homeImage">
      
    <img src={Home} />
   
    </div>
    <div className="cardHome">
     <div className="leftDesign">
      <p className="leftTextDesign">THE MOST <span style={{color:"#0075FF"}}>AFFORDABLE</span> LEARNING PLATFORM</p>
      <p className="leftSubDesign">Learning from our best faculty</p>
      <TextField
        id="input-with-icon-textfield"
       placeholder="Enter Phone Number"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <p> +91 - </p>
            </InputAdornment>
          ),
          endAdornment:(
            <InputAdornment position="end">
              <ChevronRightRoundedIcon/>
            </InputAdornment>
          )
        }}
      />
     </div>
     <div className="divHomeImage"><img src={AppImage} className="appImage"/></div>
    </div>
    </Fragment> 
  )
}