import React from "react";
import './Terms.css'
import {TermsData} from "../../JsonData/Terms&Cond/Terms&Cond";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Terms() {
  return (
    <div>
       <Header/>
      <div className="text">
        <h1>{TermsData.one.topic}</h1>
        <p>{TermsData.one.detail}</p>
      </div>
      <div className="text">
        <h1>{TermsData.two.topic}</h1>
        <p>{TermsData.one.detail}</p>
      </div>
      <div className="text">
        <h1>{TermsData.three.topic}</h1>
        <p>{TermsData.one.detail}</p>
      </div>
      <div className="text">
        <h1>{TermsData.four.topic}</h1>
        <p >{TermsData.one.detail}</p>
      </div>
      <Footer/>
    </div>
  );
}

export default Terms;
