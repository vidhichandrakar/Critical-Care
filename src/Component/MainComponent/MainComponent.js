import React, { Fragment } from "react";
import Header from "../Header/Header";
import { NavHome } from "../Features/NavHome";
import Footer from "../Footer/Footer";
import Testimonials from "../Features/Testimonials";


const MainComponent = ()=>{
  return(
    <Fragment>
      <Header/>
       <NavHome/>
       <Testimonials/>
      <Footer />
    </Fragment>
  )
}
export default MainComponent