import React, { Fragment } from "react";
import Header from "../Header/Header";
import { NavHome } from "../Features/NavHome";
import Footer from "../Footer/Footer";
import Aboutus from '../Aboutus/Aboutus';
import Terms from '../Terms&Condition/Terms'
import CategoryBox from "../Features/CategoryBox";


const MainComponent = ()=>{
  return(
    <Fragment>
      <Header/>
      <NavHome/>
      <CategoryBox/>
      <Footer />
    </Fragment>
  )
}
export default MainComponent