import React, { Fragment } from "react";
import "./Aboutus.css";
import Logo from "../../Media/Images/Logo.png";
import { AboutData, Aims, Objectives } from "../../JsonData/AboutData/AboutData";
import AppLogo from "../../Media/Images/App_Logo.jpg";
import GoogleLogo from "../../Media/Images/Google_logo.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Typography, Box, Card } from "@mui/material";


function Aboutus() {
  return (
    <Fragment>
      <Header />
      {/* <div>
        <div className="Aboutbox box-col">
          <div className="width_margin textLeft">
            <h1>About Us</h1>
            <p>Physics is ❤️. Class 11th, 12th, JEE, NEET preparation</p>
            <p>
              PhysicsWallah aims at providing quality content to every child for
              free. Live classes, video lectures, test series, lecturewise
              notes, topicwise assignment with best questions, dynamic exercise
              and much more. Almost 90% content on this App is for free and will
              always be. The founder Alakh Pandey stands for education for every
              child irrespective of it's economic status.
            </p>
          </div>
          <div className="box-fix">
            <div className="w30 box">
              <img
                src={Logo}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                width={250}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className="Testmain">
          <div className="testBox">
            <p>{AboutData.content1.heading}</p>
            <p>{AboutData.content1.para}</p>
          </div>
          <div className="testBox">
            <p>{AboutData.content1.heading}</p>
            <p>{AboutData.content1.para}</p>
          </div>
          <div className="testBox">
            <p>{AboutData.content1.heading}</p>
            <p>{AboutData.content1.para}</p>
          </div>
          <div className="testBox">
            <p>{AboutData.content1.heading}</p>
            <p>{AboutData.content1.para}</p>
          </div>
          <div className="testBox">
            <p>{AboutData.content5.heading}</p>
            <p>{AboutData.content5.para}</p>
          </div>
          <div className="testBox Download-row">
            <p>Download App</p>
            <a href="#">
              <img
                src={GoogleLogo}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                width={100}
                height={40}
                className="margin DownloadMargin "
              />
            </a>
            <a href="#">
              <img
                src={AppLogo}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                width={100}
                height={40}
                className="margin DownloadMargin "
              />
            </a>
          </div>
        </div>
      </div> */}
      <Box>
        <div className="Aboutbox box-col">
          <div className="width_margin textLeft">
            <h1>About Us</h1>
            <p className="textHead">
              Critical Care Medicine has progressed to the extent that it has
              become the backbone of modern medicine and surgical practice. The
              scope and resulting practice of Critical Care are emerging
              rapidly. This initiative aims at providing an up-to-date resource
              of intensive care practice. It aims to narrow the gap between the
              pioneers of the subject and the Critical Care practitioners
              world-wide. 
            </p>
            <p className="textHead">The idea of this endeavor originated with....</p>
          </div>
          <Box className="flexrow SB">
            {/* 2 image dalna hae inche  */}
          {/* <div className="box-fix">
            <div className="w30 box">
              <img
                src={Logo}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                width={250}
                height={50}
              />
            </div>
          </div> */}
          <div className="box-fix">
            <div className="w30 box">
              <img
                src={Logo}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                width={250}
                height={50}
              />
            </div>
          </div>
          </Box>
        </div>
        <div className="Aboutbox box-col">
        <div className="Testmain">
        <h3>Aims</h3>
         {Aims.map((value) => ( <div className="testBox">
            <p className="textHead"><b>{value.heading} : </b>{value.para}</p>
          </div>))}
          </div>
       </div>
        <div className="Aboutbox box-col">
        <div className="Testmain">
        <h3>Objectives</h3>
         {Objectives.map((value) => ( <div className="testBox">
            <p className="textHead"><b>{value.heading} : </b>{value.para}</p>
          </div>))}
          </div>
       </div>
      </Box>
      <Footer />
    </Fragment>
  );
}

export default Aboutus;
