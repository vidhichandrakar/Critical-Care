import React, { Fragment } from "react";
import Header from "../Header/Header";
import { NavHome } from "../Features/NavHome";
import Footer from "../Footer/Footer";
import PrivacyPolicy from "../Service/PrivacyPolicy";
import ContactUs from "../Service/ContactUs";


const MainComponent = ()=>{
  return(
    <Fragment>
      <Header/>
       <NavHome/>
       <ContactUs/>
       <PrivacyPolicy/>
      <Footer />
    </Fragment>
  )
}
export default MainComponent