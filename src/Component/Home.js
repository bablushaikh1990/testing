import react, { useEffect, useState } from 'react';

import {  useNavigate } from 'react-router-dom';
import Banner from "../images/home-banner.svg";
import Welcome from "../images/welcome-image.jpg";
import Map1 from "../images/map-01.png";
import Map2 from "../images/map-02.png";
import Map3 from "../images/map-03.png";
import map4 from "../images/map-04.png";
import client1 from "../images/client-01.png"
import client2 from "../images/client-02.png"
import client3 from "../images/client-03.png"
import client4 from "../images/client-04.png"
import matchers from '@testing-library/jest-dom/matchers';
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavItem, PageItem } from 'react-bootstrap';

const Home = () => {


    return (
  <>
 <body className="home-page">
 <section className="banner">
      <div className="wrapper">
        <div className="banner-area">
          <div className="banner-right">
            <img src={Banner} alt="Banner Image" />
          </div>
          <div className="banner-left">
            <div className="banner-title">Social ideas for Your</div>
            <div className="banner-title">
              <span>BRANDS <br />HERE</span> With Full Solutions
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="welcome-area">
      <div className="welcome-img">
        <img src={Welcome} alt="RZ Web Media" />
      </div>
      <div className="wrapper">
        <div className="welcome-left">
          <h4>Welcome</h4>
          <h2>RZ Web Media</h2>
          <h5>Digital Marketing Agency Brooklyn, New York</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices da. Risus commod
          </p>
          <div className="button-box">
            <a href="#" className="button redlink">Read More</a>
          </div>
        </div>
      </div>
    </section>
    <section className="item-box our-services">
      <div className="wrapper">
        <h3 className="center"><span>Our</span> Services</h3>
        <div className="item-text center">
          Praesent rhoncus facilisis nunc vitae pharetra. Curabitur eu tellus
          pharetra, pellentesque felis vel, porta massa. Fusce fermentum dolor
          ac eros finibus lacinia. In fringilla tempor laoreet. Curabitur sed
          venenatis urna, quis elementum metus.
        </div>
        <div className="box-lists">
          <div className="list-item">
            <h5 className="website">Website <br />Solutions</h5>
            <div className="item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultric gravida. Risus commodo ...
            </div>
            <div className="item-link"><a href="#">Read More</a></div>
          </div>
          <div className="list-item">
            <h5 className="design">Design & <br />Brandings</h5>
            <div className="item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultric gravida. Risus commodo ...
            </div>
            <div className="item-link"><a href="#">Read More</a></div>
          </div>
          <div className="list-item">
            <h5 className="ecommerce">Ecommerce <br />Website Solutions</h5>
            <div className="item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultric gravida. Risus commodo ...
            </div>
            <div className="item-link"><a href="#">Read More</a></div>
          </div>
          <div className="list-item">
            <h5 className="marketing">Marketing & <br />Lead Generations</h5>
            <div className="item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultric gravida. Risus commodo ...
            </div>
            <div className="item-link"><a href="#">Read More</a></div>
          </div>
          <div className="list-item">
            <h5 className="motion">Motion & <br />Animations</h5>
            <div className="item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultric gravida. Risus commodo ...
            </div>
            <div className="item-link"><a href="#">Read More</a></div>
          </div>
          <div className="list-item">
            <h5 className="content">Content/<wbr />Technical <br />Writings</h5>
            <div className="item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultric gravida. Risus commodo ...
            </div>
            <div className="item-link"><a href="#">Read More</a></div>
          </div>
        </div>
      </div>
    </section>
    <section className="item-box our-achievements">
      <div className="wrapper">
        <h3 className="center"><span>Our</span> Achievements</h3>
        <div className="item-text center">
          Curabitur laoreet maximus euismod. Nunc eget lacus velit. Suspendisse
          consectetur bibendum odio in consequat. Donec ullamcorper suscipit
          massa ac ullamcorper. Quisque consectetur arcu non finibus vehicula.
        </div>
        <div className="circle-lists">
          <div className="circle-item">
            <div className="circle-text"><span>800+</span>Projects</div>
          </div>
          <div className="circle-item">
            <div className="circle-text"><span>20+</span>Years</div>
          </div>
          <div className="circle-item">
            <div className="circle-text"><span>450+</span>Clients</div>
          </div>
          <div className="circle-item">
            <div className="circle-text"><span>50+</span>Team</div>
          </div>
        </div>
        <div className="button-box">
          <a href="#" className="button">Book a Appointment</a>
        </div>
      </div>
    </section>
    <section className="item-box we-work">
      <div className="wrapper">
        <h3 className="center"><span>How</span> We Work</h3>
        <div className="item-text center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          susp ultrices da. Risus commod. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices da.
          Risus commod Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum suspendisse ultrices da. Risus commod
        </div>
        <div className="circle-lists">
          <div className="circle-item">
            <em>1</em><span className="icon-01">icon</span>Idea
          </div>
          <div className="circle-item">
            <em>2</em><span className="icon-02">icon</span>Research
          </div>
          <div className="circle-item">
            <em>3</em><span className="icon-03">icon</span>UI/UX
          </div>
          <div className="circle-item">
            <em>4</em><span className="icon-04">icon</span>Development
          </div>
          <div className="circle-item">
            <em>5</em><span className="icon-05">icon</span>Testing
          </div>
          <div className="circle-item">
            <em>6</em><span className="icon-06">icon</span>SEO
          </div>
        </div>
        <div className="button-box">
          <a href="#" className="button white">Book a Appointment</a>
        </div>
      </div>
    </section>
     <section className="item-box we-serve">
      <div className="wrapper">
        <h3 className="center"><span>Industries</span> We Serve</h3>
        <div className="item-text center">
          Sed ultricies, velit id mollis venenatis, mi turpis faucibus nisl, nec
          tincidunt mi nibh laoreet metus. Nunc rutrum nec lorem nec commodo.
          Pellentesque nec nulla velit. Curabitur interdum, eros faucibus
          facilisis euismod, ante enim scelerisque tortor, nec blandit dolor
          velit faucibus felis.
        </div>
        <div className="accordion" id="accordion-fz">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                Construction and Home Improvement Services
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion-fz">
              <div className="accordion-body">
                <div className="appointment">
                  <a href="#">Book a Appointment</a>
                </div>
                <div className="appointment-info">
                  <ul className="columns-02 max-60">
                    <li>Car Dealerships</li>
                    <li>Auto Repair Shops</li>
                    <li>Car Rental Services</li>
                    <li>Auto Parts and Accessories Stores</li>
                    <li>Towing Services</li>
                    <li>Second Hand Car Sales Businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo" >
                Professional Services
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordion-fz" >
              <div className="accordion-body">
                <div className="appointment">
                  <a href="#">Book a Appointment</a>
                </div>
                <div className="appointment-info">
                  <ul className="columns-02 max-60">
                    <li>Car Dealerships</li>
                    <li>Auto Repair Shops</li>
                    <li>Car Rental Services</li>
                    <li>Auto Parts and Accessories Stores</li>
                    <li>Towing Services</li>
                    <li>Second Hand Car Sales Businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree" >
                Healthcare and Medical Services
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordion-fz">
              <div className="accordion-body">
                <div className="appointment">
                  <a href="#">Book a Appointment</a>
                </div>
                <div className="appointment-info">
                  <ul className="columns-02 max-60">
                    <li>Car Dealerships</li>
                    <li>Auto Repair Shops</li>
                    <li>Car Rental Services</li>
                    <li>Auto Parts and Accessories Stores</li>
                    <li>Towing Services</li>
                    <li>Second Hand Car Sales Businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour" >
                Retail and E-commerce Services
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordion-fz" >
              <div className="accordion-body">
                <div className="appointment">
                  <a href="#">Book a Appointment</a>
                </div>
                <div className="appointment-info">
                  <ul className="columns-02 max-60">
                    <li>Car Dealerships</li>
                    <li>Auto Repair Shops</li>
                    <li>Car Rental Services</li>
                    <li>Auto Parts and Accessories Stores</li>
                    <li>Towing Services</li>
                    <li>Second Hand Car Sales Businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive" >
                Hospitality and Tourism Services
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordion-fz" >
              <div className="accordion-body">
                <div className="appointment">
                  <a href="#">Book a Appointment</a>
                </div>
                <div className="appointment-info">
                  <ul className="columns-02 max-60">
                    <li>Car Dealerships</li>
                    <li>Auto Repair Shops</li>
                    <li>Car Rental Services</li>
                    <li>Auto Parts and Accessories Stores</li>
                    <li>Towing Services</li>
                    <li>Second Hand Car Sales Businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix">
                Automotive
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordion-fz">
              <div className="accordion-body">
                <div className="appointment">
                  <a href="#">Book a Appointment</a>
                </div>
                <div className="appointment-info">
                  <ul className="columns-02 max-60">
                    <li>Car Dealerships</li>
                    <li>Auto Repair Shops</li>
                    <li>Car Rental Services</li>
                    <li>Auto Parts and Accessories Stores</li>
                    <li>Towing Services</li>
                    <li>Second Hand Car Sales Businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven">
                Beauty and Personal Care Services
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordion-fz">
              <div className="accordion-body">
                <div className="appointment">
                  <a href="#">Book a Appointment</a>
                </div>
                <div className="appointment-info">
                  <ul className="columns-02 max-60">
                    <li>Car Dealerships</li>
                    <li>Auto Repair Shops</li>
                    <li>Car Rental Services</li>
                    <li>Auto Parts and Accessories Stores</li>
                    <li>Towing Services</li>
                    <li>Second Hand Car Sales Businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight" >
                Food and Beverage Services
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordion-fz" >
              <div className="accordion-body">
                <div className="appointment">
                  <a href="#">Book a Appointment</a>
                </div>
                <div className="appointment-info">
                  <ul className="columns-02 max-60">
                    <li>Car Dealerships</li>
                    <li>Auto Repair Shops</li>
                    <li>Car Rental Services</li>
                    <li>Auto Parts and Accessories Stores</li>
                    <li>Towing Services</li>
                    <li>Second Hand Car Sales Businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine" >
                Education/<wbr />Training Services
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#accordion-fz" >
              <div className="accordion-body">
                <div className="appointment">
                  <a href="#">Book a Appointment</a>
                </div>
                <div className="appointment-info">
                  <ul className="columns-02 max-60">
                    <li>Car Dealerships</li>
                    <li>Auto Repair Shops</li>
                    <li>Car Rental Services</li>
                    <li>Auto Parts and Accessories Stores</li>
                    <li>Towing Services</li>
                    <li>Second Hand Car Sales Businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen">
                Jewelry and Accessories Services
              </button>
            </h2>
            <div
              id="collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#accordion-fz" >
              <div className="accordion-body">
                <div className="appointment">
                  <a href="#">Book a Appointment</a>
                </div>
                <div className="appointment-info">
                  <ul className="columns-02 max-60">
                    <li>Car Dealerships</li>
                    <li>Auto Repair Shops</li>
                    <li>Car Rental Services</li>
                    <li>Auto Parts and Accessories Stores</li>
                    <li>Towing Services</li>
                    <li>Second Hand Car Sales Businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 

<section className="item-box states">
      <div className="wrapper">
        <h3 className="center"><span>States</span> We Serve</h3>
        <div className="item-text center">
          In tempus nisi ac quam dapibus consequat eget a lorem. Aliquam quam
          nisl, lacinia ut lobortis ac, elementum ac dolor. Fusce consectetur
          leo quis egestas euismod. Quisque maximus vitae diam ac eleifend.
          Suspendisse et viverra purus, non varius urna. Quisque sit amet dolor
          vitae leo vehicula bibendum in vitae turpis. Nulla pharetra, odio eget
          gravida blandit, mi nisl volutpat nibh, a hendrerit mi tellus non
          ligula.
        </div>
        <div className="state-box">
          <div className="state-list">
            <div className="location">
              <p>New York, United States of America</p>
              <a href="#" className="button btn-small">View Details</a>
            </div>
            <div className="map"><img src={Map1} alt="Map" /></div>
          </div>
          <div className="state-list">
            <div className="location">
              <p>Pennsylvania, United States of America</p>
              <a href="#" className="button btn-small">View Details</a>
            </div>
            <div className="map"><img src={Map2} alt="Map" /></div>
          </div>
          <div className="state-list">
            <div className="location">
              <p>Florida, United States of America</p>
              <a href="#" className="button btn-small">View Details</a>
            </div>
            <div className="map"><img src={Map3} alt="Map" /></div>
          </div>
          <div className="state-list">
            <div className="location">
              <p>New Jersey, United States of America</p>
              <a href="#" className="button btn-small">View Details</a>
            </div>
            <div className="map"><img src={map4} alt="Map" /></div>
          </div>
        </div>
        <div className="button-box">
          <a href="#" className="button white">View More States</a>
        </div>
      </div>
    </section>
    <section className="item-box technology">
      <div className="wrapper">
        <h3 className="center"><span>Technology</span> We Work</h3>
        <div className="item-text center">
          Integer vel mattis tellus, rutrum vestibulum enim. Aliquam ac velit
          augue. Suspendisse libero turpis, viverra commodo nulla a, convallis
          maximus lectus. Integer malesuada erat ex, ac sollicitudin arcu
          consequat sit amet. <br />Sed egestas tempus aliquam. Suspendisse
          condimentum et nulla at efficitur. Ut ut enim accumsan ante finibus
          scelerisque.
        </div>
        <div className="technology-list">
          <div className="list-item">
            <div className="icons backend">Icon</div>
            <span>Backend</span>
          </div>
          <div className="list-item">
            <div className="icons frontend">Icon</div>
            <span>Frontend</span>
          </div>
          <div className="list-item">
            <div className="icons fullstack">Icon</div>
            <span>Fullstack</span>
          </div>
          <div className="list-item">
            <div className="icons ecommerce">Icon</div>
            <span>E-Commerce</span>
          </div>
          <div className="list-item">
            <div className="icons cms">Icon</div>
            <span>CMS</span>
          </div>
          <div className="list-item">
            <div className="icons mobile">Icon</div>
            <span>Mobile</span>
          </div>
          <div className="list-item">
            <div className="icons devops">Icon</div>
            <span>DevOps</span>
          </div>
          <div className="list-item">
            <div className="icons code">Icon</div>
            <span>Low Code No Code</span>
          </div>
          <div className="list-item">
            <div className="icons data">Icon</div>
            <span>Data Analytics</span>
          </div>
        </div>
        <div className="button-box">
          <a href="#" className="button">Book a Appointment</a>
        </div>
      </div>
    </section>
    <section className="item-box service">
      <div className="wrapper">
        <h3 className="center"><span>We are Here</span> For your Service</h3>
        <form action="">
          <div className="form-box">
            <div className="list-item">
              <label for="name">Name<span>*</span></label>
              <input id="name" type="text" name="name" />
            </div>
            <div className="list-item">
              <label for="email">Email<span>*</span></label>
              <input id="email" type="text" name="email" />
            </div>
            <div className="list-item">
              <label for="phone">Phone<span>*</span></label>
              <input id="phone" type="text" name="phone" />
              <div className="list-text form-check">
                <input type="checkbox" className="form-check-input" id="approve" />
                <label className="form-check-label" for="approve" >
                  I approve RZ Web Media to Contact me</label>
              </div>
            </div>
            <div className="list-item">
              <label for="message">Message/Requirements<span>*</span></label>
              <textarea id="message" ></textarea>
              <div className="list-text">
                Attach files Select from your <a href="#">Computer</a> or
                <a href="#">Google Docs</a> or
                <a href="#"><span>Dropbox</span> Url</a>
              </div>
            </div>
          </div>
          <div className="button-box">
            <button className="button">Book a Appointment</button>
          </div>
        </form>
      </div>
    </section>
    <section className="item-box faq">
      <div className="wrapper">
        <h3 className="center"><span>FAQ</span> How can We Help</h3>
        <div className="item-text center">
          Sed rhoncus sem sit amet lacinia congue. Phasellus eu feugiat sapien.
          Suspendisse potenti. Sed cursus lectus id ultrices scelerisque. Etiam
          tincidunt consectetur augue, sit amet vestibulum lectus aliquet ac.
        </div>
        <div className="accordion" id="accordion-fze">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingone">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseone"
                aria-expanded="true"
                aria-controls="collapseone"
              >
                Maecenas eget convallis tortor, eu elementum felis. Sed porta
                ipsum eget ex eleifend aliquet. Pellentesque tristique euismod
                bibendum?
              </button>
            </h2>
            <div
              id="collapseone"
              className="accordion-collapse collapse show"
              aria-labelledby="headingone"
              data-bs-parent="#accordion-fze"
            >
              <div className="accordion-body">
                Sed rhoncus sem sit amet lacinia congue. Phasellus eu feugiat
                sapien. Suspendisse potenti? Sed cursus lectus id ultrices
                scelerisque. Etiam tincidunt consectetur augue, sit amet
                vestibulum lectus aliquet ac. Intege rhoncus libero at sapien
                bibendum, malesuada hendrerit nisi ullamcorper. Proin ornare
                enim in tortor maximus laoreet. Praesent eu sapien at diam
                commodo sollicitudin ac vehicula felis. Nullam sed tortor at
                massa fringilla cursus. Vivamus vel mauris ligula. Suspendisse
                vitae lectus eget augue placerat varius.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingtwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsetwo"
                aria-expanded="false"
                aria-controls="collapsetwo"
              >
                Sed rhoncus sem sit amet lacinia congue. Phasellus eu feugiat
                sapien. Suspendisse potenti?
              </button>
            </h2>
            <div
              id="collapsetwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingtwo"
              data-bs-parent="#accordion-fze"
            >
              <div className="accordion-body">
                Sed cursus lectus id ultrices scelerisque. Etiam tincidunt
                consectetur augue, sit amet vestibulum lectus aliquet ac. Intege
                rhoncus libero at sapien bibendum, malesuada hendrerit nisi
                ullamcorper. Proin ornare enim in tortor maximus laoreet.
                Praesent eu sapien at diam commodo sollicitudin ac vehicula
                felis. Nullam sed tortor at massa fringilla cursus. Vivamus vel
                mauris ligula. Suspendisse vitae lectus eget augue placerat
                varius.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingthree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsethree"
                aria-expanded="false"
                aria-controls="collapsethree"
              >
                Sed rhoncus sem sit amet lacinia congue. Phasellus eu feugiat
                sapien. Suspendisse potenti?
              </button>
            </h2>
            <div
              id="collapsethree"
              className="accordion-collapse collapse"
              aria-labelledby="headingthree"
              data-bs-parent="#accordion-fze"
            >
              <div className="accordion-body">
                Sed cursus lectus id ultrices scelerisque. Etiam tincidunt
                consectetur augue, sit amet vestibulum lectus aliquet ac. Intege
                rhoncus libero at sapien bibendum, malesuada hendrerit nisi
                ullamcorper. Proin ornare enim in tortor maximus laoreet.
                Praesent eu sapien at diam commodo sollicitudin ac vehicula
                felis. Nullam sed tortor at massa fringilla cursus. Vivamus vel
                mauris ligula. Suspendisse vitae lectus eget augue placerat
                varius.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
              >
                Nunc velit dui, tincidunt at malesuada eu, porta et sem.
                Curabitur hendrerit metus magna, nec rhoncus sem auctor
                ultricies. Mauris a fringilla mauris?
              </button>
            </h2>
            <div
              id="collapsefour"
              className="accordion-collapse collapse"
              aria-labelledby="headingfour"
              data-bs-parent="#accordion-fze"
            >
              <div className="accordion-body">
                Sed cursus lectus id ultrices scelerisque. Etiam tincidunt
                consectetur augue, sit amet vestibulum lectus aliquet ac. Intege
                rhoncus libero at sapien bibendum, malesuada hendrerit nisi
                ullamcorper. Proin ornare enim in tortor maximus laoreet.
                Praesent eu sapien at diam commodo sollicitudin ac vehicula
                felis. Nullam sed tortor at massa fringilla cursus. Vivamus vel
                mauris ligula. Suspendisse vitae lectus eget augue placerat
                varius.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapsefive"
              >
                Donec venenatis quis nibh a elementum. Donec euismod euismod
                velit, quis placerat erat venenatis in?
              </button>
            </h2>
            <div
              id="collapsefive"
              className="accordion-collapse collapse"
              aria-labelledby="headingfive"
              data-bs-parent="#accordion-fze"
            >
              <div className="accordion-body">
                Sed cursus lectus id ultrices scelerisque. Etiam tincidunt
                consectetur augue, sit amet vestibulum lectus aliquet ac. Intege
                rhoncus libero at sapien bibendum, malesuada hendrerit nisi
                ullamcorper. Proin ornare enim in tortor maximus laoreet.
                Praesent eu sapien at diam commodo sollicitudin ac vehicula
                felis. Nullam sed tortor at massa fringilla cursus. Vivamus vel
                mauris ligula. Suspendisse vitae lectus eget augue placerat
                varius.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingsix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsesix"
                aria-expanded="false"
                aria-controls="collapsesix"
              >
                Cras sed lacus ac mi gravida posuere. Donec convallis turpis eu
                consectetur fringilla?
              </button>
            </h2>
            <div
              id="collapsesix"
              className="accordion-collapse collapse"
              aria-labelledby="headingsix"
              data-bs-parent="#accordion-fze"
            >
              <div className="accordion-body">
                Sed cursus lectus id ultrices scelerisque. Etiam tincidunt
                consectetur augue, sit amet vestibulum lectus aliquet ac. Intege
                rhoncus libero at sapien bibendum, malesuada hendrerit nisi
                ullamcorper. Proin ornare enim in tortor maximus laoreet.
                Praesent eu sapien at diam commodo sollicitudin ac vehicula
                felis. Nullam sed tortor at massa fringilla cursus. Vivamus vel
                mauris ligula. Suspendisse vitae lectus eget augue placerat
                varius.
              </div>
            </div>
          </div>
        </div>
        <div className="button-box">
          <a href="#" className="button">View More FAQs</a>
        </div>
      </div>
    </section>
    <section className="item-box feedback">
      <div className="wrapper">
        <h3 className="center"><span>Clients</span> Feedback for RZ</h3>
        <div className="item-text center">
          Vivamus ante ipsum, laoreet sagittis convallis a, efficitur et tellus.
          Integer id felis nec mi pharetra elementum ullamcorper sit amet dolor.
          Donec faucibus sagittis dapibus. Nunc a lorem purus. Proin placerat,
          metus vitae faucibus tincidunt, augue metus elementum velit, vel
          fermentum tortor justo sed dui.
        </div>
        
        <div id="testimonial-slider" className="box-lists owl-carousel">
    
          <div className="list-item testimonial">
            <div className="client-img">
              <img src={client1} alt="Usman Khaljee" />
            </div>
            <h5>Usman Khaljee</h5>
            <h6>Communications Director</h6>
            <div className="item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultric gravida. Risus commodo ...
            </div>
            <div className="item-link"><a href="#">Read More</a></div>
          </div>
          
        
          <div className="list-item testimonial">
            <div className="client-img">
              <img src={client2} alt="Christopher Ethan" />
            </div>
            <h5>Christopher Ethan</h5>
            <h6>Chief Learning Officer</h6>
            <div className="item-text">
              Nunc a lorem purus. Proin placerat, metus vitae faucibus
              tincidunt, augue metus elementum velit, vel fermentum tortor justo
              sed dui ...
            </div>
            <div className="item-link"><a href="#">Read More</a></div>
          </div>
          
          <div className="list-item testimonial">
            <div className="client-img">
              <img src={client3} alt="Isabella Evelyn" />
            </div>
            <h5>Isabella Evelyn</h5>
            <h6>Managing Director</h6>
            <div className="item-text">
              Roin elementum dolor in eros sollicitudin vestibulum. Nunc vel
              efficitur justo. Nulla venenatis vitae massa eu consequat ...
            </div>
            <div className="item-link"><a href="#">Read More</a></div>
          </div>
          <div className="list-item testimonial">
            <div className="client-img">
              <img src={client4} alt="Isabella Evelyn" />
            </div>
            <h5>Madison Huxley</h5>
            <h6>Marketing Manager</h6>
            <div className="item-text">
              Dolore magna venenatis sollicitudin vestibulum. Nunc evel
              efficitur justo. Nulla labore adipis cing elit dolore magna
              enenatis tempor vitae massa weu consequat ...
            </div>
            <div className="item-link"><a href="#">Read More</a></div>
          </div>
        
        </div>
   
        <div className="button-box">
          <a href="#" className="button">View All</a>
        </div>
      </div>
    </section>
  
    </body>
    
  </>
    )
}

export default Home;