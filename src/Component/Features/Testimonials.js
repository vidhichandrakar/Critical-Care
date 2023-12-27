import React, { Fragment } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import arrowright from '../../Media/Images/arrow-right.png'
import arrowleft from '../../Media/Images/arrow-left.png'

function Testimonials() {
  return (
    <Fragment>
      <div className="TestimonialsMain">
        <h3 className="TestimonialsHeading">Testimonials</h3>
        <Container fixed>
        <Box className='boxUnderHeading' sx={{ bgcolor: '#cfe8fc', height: '0.5vh' }} />
        </Container>

        <h1 className="secondHeading">
         <span className="hereItFrom">Hear It From </span>
         <span className="theMasters"> The Masters</span>
        </h1>

        <div className="TestimonialsCard">
          <div className="TestimonialsLeftCard">
            <p className="testimonialPara">
              360 Critical Care has been a great contributor to the development
              of my personality. I’ve been following Sanat sir for the past two
              years. I also took local tuition, but I want to give full credit
              to PW because my chemistry was very weak when I joined 360CC, and
              it’s only because of 360CC that I got excellent chemistry marks
              this year in JEE Advance. I am a big fan of the 360CC Star
              faculty.
            </p>
            <h3 className="names">Harshil Paresh Kumar Khatri</h3>
          </div>
          <div className="TestimonialsLeftCard">
            <p className="testimonialPara">
              360CC is a place where you can find an amalgamation of learning. I
              feel great because I only studied through 360 Critical Care, and
              because I am from a remote location of Uttarakhand, I had no other
              source for JEE preparation other than the 360CC course.
            </p>
            <h3 className="names">Rajeev Kandal</h3>
          </div>
        </div>

        <div className="TestimonialsArrow">
            <span className="Arrow"><img src={arrowleft} className="arrow1"/></span>
            <span className="Arrow"><img src={arrowright} className="arrow2"/></span>
          </div>
      </div>
    </Fragment>
  );
}

export default Testimonials;
