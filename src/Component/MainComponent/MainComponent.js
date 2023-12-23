import React, { Fragment } from "react";
import Header from "../Header/Header";
import { NavHome } from "../Features/NavHome";
import { Box } from "@mui/material";
const MainComponent = ()=>{
  return(
    <Fragment>
      <Header/>
      <NavHome/>
      
    </Fragment>
  )
}
export default MainComponent