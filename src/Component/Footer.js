import react, { useState } from 'react';

import {  useNavigate } from 'react-router-dom';
import {  Link } from 'react-router-dom';
import myImage from '../images/rz-logo.svg';

const Footer = () => {


    return (
  <>
  <body className="footer-section">
      <div className="wrapper">
        <div className="footer-link">
          <div className="copyright">
            <div className="site-logo">
              <Link to="/">
              <a href="">
                <img src={myImage} alt="RZ Web Media" />
            </a>
            </Link>
            </div>
            <div className="copy-text">
              In business since 2013, <br />RZ Web Media is an end to end IT
              Solution Company that is headquartered in New York <br />with
              Branches in Ontario, Auckland.
            </div>
            <div className="copy-rights">
              Copyright &copy; 2024 RZ Web Media | All Rights Reserved
            </div>
          </div>
          <div className="quick-links">
            <h5>Quick Links</h5>
            <ul className="links">
            <Link to="/">
              <li><a className="active" href="">Home</a></li>
              </Link>
              <Link to="/about">
              <li><a href="">About</a></li>
              </Link>
              <Link to="/Industries">
              <li><a href="">Industries We Serve</a></li>
              </Link>
              <Link to="/state">
              <li><a href="state.html">State We Serve</a></li>
              </Link>
              <Link to="/technology">
              <li><a href="technology.html">Technology</a></li>
              </Link>
              <Link to="/service">
              <li><a href="">Services</a></li>
              </Link>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div className="usefull-links">
            <h5>Useful Links</h5>
            <ul className="links">
              <li><a href="#">Get a Quote</a></li>
              <li><a href="#">Pricing</a></li>
              <Link to="/blog">
              <li><a href="#">Blog</a></li>
              </Link>
              <li><a href="#">Career</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Delivery and Pricing Policies</a></li>
              <li><a href="#">Money Back</a></li>
              <li><a href="#">Policies</a></li>
              <li><a href="#">Cookies Policies</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="social-link">
          <ul>
            <li><a className="facebook" href="#">facebook</a></li>
            <li><a className="linkedin" href="#">facebook</a></li>
            <li><a className="instagram" href="#">facebook</a></li>
            <li><a className="twitter" href="#">facebook</a></li>
            <li><a className="pinterest" href="#">facebook</a></li>
            <li><a className="youtube" href="#">facebook</a></li>
          </ul>
        </div>
      </div>
    </body>
    
  </>
    )
}

export default Footer;