import React from "react";
import "./footer.css";
import Logo from "../../Media/Images/Logo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col w50">
            <img src={Logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} width={200} height={50} />
              <p>
                We understand that every student has different needs and
                capabilities, which is why we create such a wonderful and unique
                curriculum that is the best fit for every student.
              </p>
            </div>
            <div class="footer-col ">
              <div className="col">
                <h4>follow us</h4>
                <div class="    ">
                <a href="#">
                    <FacebookIcon />
                  </a>
                  <a href="#">
                   <InstagramIcon />
                  </a>
                  <a href="#">
                   <YouTubeIcon />
                  </a>
                  <a href="#">
                    <TwitterIcon />
                  </a>
                </div>
              </div>
              <div className="col">
                <h4>For Enquiry : </h4>
                <h4>care@360criticalcare</h4>
              </div>
            </div>
          </div>
          <div>
            
          </div>
          <div className="row">
            <div className="col">
                <p>Terms and Condition </p>
                <p> | Privacy Policy </p>
                <p> | About Us </p>
                <p> | Contact Us </p>
            </div>

            <p>Copyright @{new Date().getFullYear()} 360 Critical Care. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
