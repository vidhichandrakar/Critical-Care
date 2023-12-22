import React from "react";
import './Terms.css'
import {TermsData} from "../../JsonData/Terms&Cond/Terms&Cond";

function Terms() {
  return (
    <div>
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
    </div>
  );
}

export default Terms;
