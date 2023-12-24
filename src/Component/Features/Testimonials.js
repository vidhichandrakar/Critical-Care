import React, { Fragment } from "react";
import arrowright from '../../Media/Images/arrow-right.png'
import arrowleft from '../../Media/Images/arrow-left.png'

function Testimonials() {
  return (
    <Fragment>
      <div>
        <h3>Testimonials</h3>
        <h1>Hear It From The Masters</h1>
        <div className="TestimonialsCard">
          <div className="TestimonialsLeftCard">
            <p>
              360 Critical Care has been a great contributor to the development
              of my personality. I’ve been following Sanat sir for the past two
              years. I also took local tuition, but I want to give full credit
              to PW because my chemistry was very weak when I joined 360CC, and
              it’s only because of 360CC that I got excellent chemistry marks
              this year in JEE Advance. I am a big fan of the 360CC Star
              faculty.
            </p>
            <h3>Harshil Paresh Kumar Khatri</h3>
          </div>
          <div className="TestimonialsLeftCard">
            <p>
              360CC is a place where you can find an amalgamation of learning. I
              feel great because I only studied through 360 Critical Care, and
              because I am from a remote location of Uttarakhand, I had no other
              source for JEE preparation other than the 360CC course.
            </p>
            <h3>Rajeev Kandal</h3>
          </div>
        </div>
        {/* <div className="TestimonialsArrow">
            <div className="Arrow">{arrowleft}</div>
            <div className="Arrow">{arrowright}</div>
          </div> */}
      </div>
    </Fragment>
  );
}

export default Testimonials;
