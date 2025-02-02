import react, { useState } from 'react';

import {  Link, useNavigate } from 'react-router-dom';


const Header = () => {


    return (
  <>
 {/* < className="home-page"> */}
    <section className="global-header">
      <div className="global-wrapper">
        <ol>
          <li><a className="phone" href="#">Phone</a></li>
          <li><a className="whatsapp" href="#">Whatsapp</a></li>
        </ol>
        <ul>
          <li><a className="Facebook" href="#">Facebook</a></li>
          <li><a className="linkedin" href="#">LinkedIn</a></li>
          <li><a className="instagram" href="#">Instagram</a></li>
          <li><a className="twitter" href="#">Twitter</a></li>
          <li><a className="pinterest" href="#">Pinterest</a></li>
          <li><a className="youtube" href="#">YouTube</a></li>
        </ul>
      </div>
    </section>
    <header className="site-header">
      <div className="wrapper">
        <div className="logo">
        <Link to="/">
          <a href="index.html">RZ Web Media</a>
          </Link>
          </div>
        <div className="navigation">
          <nav className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" 
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
              <Link to="/about">
                <li>
                  <a className="nav-link" href="">About</a></li>
               </Link>
               <Link to="/Industries">
                <li>
                  <a className="nav-link" href="" >Industries We Serve</a>
                </li>
                </Link>
                <Link to="/state">
                <li>
                  <a className="nav-link" href="">State We Serve</a>
                </li>
                </Link>
                <Link to="/technology">
                <li>
                  <a className="nav-link" href="">Technology</a>
                </li>
                </Link>
                <Link to="/service">
                <li><a className="nav-link" href="">Services</a></li>
                </Link>

                <Link to="/blog">
                <li><a className="nav-link" href="">Blog</a></li>
                </Link>
                <li><a className="nav-link" href="contact.html">Contact</a></li>
              </ul>
            </div>
          </nav>
          <div className="calltest">
            <a className="button" href="#">Book a Call</a>
          </div>
        </div>
      </div>
    </header>
    {/* </body> */}
    
  </>
    )
}

export default Header;