import React, { Fragment } from "react";
import Header from "../Header/Header";
import { NavHome } from "../Features/NavHome";
import { Box } from "@mui/material";
import Footer from "../Footer/Footer";

const MainComponent = ()=>{
  return(
    <Fragment>
      <Header/>
      <NavHome/>
      <Footer />
    </Fragment>
  )
}
export default MainComponent