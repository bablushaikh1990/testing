import { Link } from "react-router-dom";
import client1 from "../images/client-01.png"
import client2 from "../images/client-02.png"
import client3 from "../images/client-03.png"
import {BaseURL}  from "../constant/BaseUrl.js";
import { useState } from "react";
import axios from "axios";

function Industries() {
  
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
      setOpenItem(openItem === id ? null : id);
  };
  const accordionData = [
      {
          id: "one",
          title: "Maecenas eget convallis tortor, eu elementum felis...",
          content: "Sed rhoncus sem sit amet lacinia congue. Phasellus eu feugiat sapien...",
      },
      {
          id: "two",
          title: "Sed rhoncus sem sit amet lacinia congue...",
          content: "Sed cursus lectus id ultrices scelerisque. Etiam tincidunt consectetur augue...",
      },
      {
          id: "three",
          title: "Sed rhoncus sem sit amet lacinia congue...",
          content: "Sed cursus lectus id ultrices scelerisque. Etiam tincidunt consectetur augue...",
      },
      {
          id: "four",
          title: "Nunc velit dui, tincidunt at malesuada eu...",
          content: "Sed cursus lectus id ultrices scelerisque. Etiam tincidunt consectetur augue...",
      },
      {
          id: "five",
          title: "Donec venenatis quis nibh a elementum...",
          content: "Sed cursus lectus id ultrices scelerisque. Etiam tincidunt consectetur augue...",
      },
      {
          id: "six",
          title: "Cras sed lacus ac mi gravida posuere...",
          content: "Sed cursus lectus id ultrices scelerisque. Etiam tincidunt consectetur augue...",
      },
  ];

  const [service, setService] = useState()
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone:"",
    service:"",
    message:""
  })
  const Handler = (e) => {
    const { name, value ,} = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }
  const submitHandler = (e) => {
    console.log(user)
     e.preventDefault()
      setUser({
             name: "",
             email: "",
             phone:"",
             service:"",
             message:""

          })
     
  }
  const Add = async () => {
    const { name, email, phone, service, message } = user;
  
    // Validate all fields
    if (!name || !email || !phone || !service || !message) {
      
      return;
    }
  
    try {
      const res = await axios.post(`${BaseURL}/contact`, user);
      console.log("Response:", res.data);
      // Optionally reset the form or show a success message
     
    } catch (error) {
      console.error("Error submitting form:", error);
    
    }
  };

  return (
    <>
      <section className="banner">
        <div className="wrapper">
          <div className="banner-area bannerform">
            <div className="banner-right">
              <section className="item-box service">
              <form onSubmit={submitHandler}>
                      <div className="form-box">
                                        <div className="list-items">
                                            <div className="list-item">
                                                <label for="name">Name<span>*</span></label>
                                                <input id="name" type="text" name="name" value={user.name} onChange={Handler} required/>
                                            </div>
                                            <div className="list-item">
                                                <label for="email">Email<span>*</span></label>
                                                <input id="email" type="text" name="email" value={user.email}  onChange={Handler} required/>
                                            </div>
                                        </div>
                                        <div className="list-items">
                                            <div className="list-item">
                                                <label for="phone">Phone<span>*</span></label>
                                                <input id="phone" type="text" name="phone"  value={user.phone} onChange={Handler} required/>
                                            </div>
                                            <div className="list-item">
                                                <label for="services">Select Service<span>*</span></label>
                                                <select  value={user.service}  onChange={Handler}
                                                    id="services"
                                                    name="service"
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    required
                                                
                                                >
                                                    <option value="" >
                                                       Select Area
                                                    </option>
                                                    <option value="Web Development" >
                                                        Web Development
                                                    </option>
                                                    <option value="Ecommerce Website Design">
                                                        Ecommerce Website Design
                                                    </option>
                                                    <option value="Mobile App Development">
                                                        Mobile App Development
                                                    </option>
                                                    <option value="Search Engine Optimization">
                                                        Search Engine Optimization
                                                    </option>
                                                    <option value="Social Media Marketing">
                                                        Social Media Marketing
                                                    </option>
                                                    <option value="Google Local Listing">
                                                        Google Local Listing
                                                    </option>
                                                    <option value="Web Hosting Services">
                                                        Web Hosting Services
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="list-item">
                                            <label for="message"
                                            >Message/Requirements<span>*</span></label>
                                            <textarea id="message" name="message" value={user.message} onChange={Handler} required></textarea>
                                        </div>
                                        <div className="list-item check-items">
                                            {/* <div className="list-text form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="approve"
                                                />
                                                <label className="form-check-label" for="approve"
                                                >I approve RZ Web Media to Contact me</label
                                                >
                                            </div> */}
                      <div className="list-text form-check" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="approve"
                          style={{ transform: "scale(0.6)", marginTop: "-6px" }}
                        />
                        <label className="form-check-label" htmlFor="approve" >
                          I approve RZ Web Media to Contact me
                        </label>
                      </div>
                                            
                                            <div className="list-text">
                                                Attach files Select from your
                                                <a href="#">Computer</a> or <a href="#">Google Docs</a> or
                                                <a href="#">Dropbox Url</a>
                                            </div>
                                        </div>
                                        <div className="button-box">
                                            <button className="button" onClick={Add}>Book a Appointment</button>
                                        </div>
                      </div>
               </form>
              </section>
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
              <div className="button-box">
                <a className="button" href="#">Book a Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="breadcrumb">
        <div className="wrapper">
          <ul>
            <Link to="/">
            <li><a href="">Home</a></li>
            </Link>
            <li>Industries We Serve</li>
          </ul>
        </div>
      </section>
      <section className="item-box professional">
        <div className="wrapper">
          <h3 className="center"><span>Industries</span> We Serve</h3>
          <div className="item-text center">
            Sed ultricies, velit id mollis venenatis, mi turpis faucibus nisl, nec
            tincidunt mi nibh laoreet metus. Nunc rutrum nec lorem nec commodo.
            Pellentesque nec nulla velit. Curabitur interdum, eros faucibus
            facilisis euismod, ante enim scelerisque tortor, nec blandit dolor
            velit faucibus felis.
          </div>
          <div className="services-box industries">
            <div className="services-list">
              <div className="srv-number srv-01">01</div>
              <h6>Professional Services</h6>
              <div className="srv-text">
                <ul>
                  <Link to="/industries-inner">
                  <li><a href="">Law Firms</a></li>
                  </Link>
                  <li><a href="#">Accounting and Auditing Firms</a></li>
                  <li><a href="#">Financial Advisors and Investment Firms</a></li>
                </ul>
              </div>
            </div>
            <div className="services-list">
              <div className="srv-number srv-02">02</div>
              <h6>Healthcare and Medical Services</h6>
              <div className="srv-text">
                <ul>
                  <li><a href="#">Hospitals and Clinics</a></li>
                  <li>
                    <a href="#" >Private Medical Practices (Doctors, Dentists, etc.)</a >
                  </li>
                  <li>
                    <a href="#">Physical Therapy and Rehabilitation Centers</a>
                  </li>
                  <li>
                    <a href="#">Wellness and Holistic Health Services Pharmacies</a  >
                  </li>
                  <li>
                    <a href="#">Pet Care Services (Veterinary Clinics and Hospitals)</a >
                  </li>
                </ul>
              </div>
            </div>
            <div className="services-list">
              <div className="srv-number srv-03">03</div>
              <h6>Retail and E-commerce Services</h6>
              <div className="srv-text">
                <ul>
                  <li><a href="#">Online Retail Stores</a></li>
                  <li><a href="#">Brick and Mortar Retail Shops</a></li>
                  <li>
                    <a href="#" >Specialty Stores (e.g., Electronics, Clothing, Home
                      Goods)</a>
                  </li>
                  <li><a href="#">Boutiques and Small Businesses</a></li>
                  <li><a href="#">E-commerce Platforms and Marketplaces</a></li>
                  <li><a href="#">Pet Supply Stores</a></li>
                  <li><a href="#">Jewelry and Accessories</a></li>
                </ul>
              </div>
            </div>
            <div className="services-list">
              <div className="srv-number srv-04">04</div>
              <h6>Hospitality and Tourism</h6>
              <div className="srv-text">
                <ul>
                  <li><a href="#">Hotels and Resorts</a></li>
                  <li><a href="#">Bed and Breakfast Establishments</a></li>
                  <li><a href="#">Travel Agencies and Tour Operators</a></li>
                  <li><a href="#">Restaurants</a></li>
                  <li><a href="#">Cafes</a></li>
                  <li><a href="#">Food and Beverage</a></li>
                </ul>
              </div>
            </div>
            <div className="services-list">
              <div className="srv-number srv-05">05</div>
              <h6>Construction and Home Improvement Services</h6>
              <div className="srv-text">
                <ul>
                  <li><a href="#">General Contractors</a></li>
                  <li><a href="#">Home Builders</a></li>
                  <li><a href="#">Renovation and Remodeling Companies</a></li>
                  <li><a href="#">Landscaping and Tree Services</a></li>
                  <li><a href="#">Roofing Companies</a></li>
                  <li>
                    <a href="#">Plumbing, Electrical Services, HVAC, Etc</a>
                  </li>
                  <li><a href="#">Exterior and Interior Painting Services</a></li>
                </ul>
              </div>
            </div>
            <div className="services-list">
              <div className="srv-number srv-06">06</div>
              <h6>Automotive</h6>
              <div className="srv-text">
                <ul>
                  <li><a href="#">Car Dealerships</a></li>
                  <li><a href="#">Auto Repair Shops</a></li>
                  <li><a href="#">Car Rental Services</a></li>
                  <li><a href="#">Auto Parts and Accessories Stores</a></li>
                  <li><a href="#">Towing Services</a></li>
                  <li>
                    <a href="#">Second Hand Car Sales Businesses (Car Flipping Business)</a >
                  </li>
                </ul>
              </div>
            </div>
            <div className="services-list">
              <div className="srv-number srv-07">07</div>
              <h6>Beauty and Personal Care</h6>
              <div className="srv-text">
                <ul>
                  <li><a href="#">Salons and Spas</a></li>
                  <li><a href="#">Skincare and Cosmetic Brands</a></li>
                  <li><a href="#">Personal Trainers and Nutritionists</a></li>
                  <li><a href="#">Fitness and Wellness Centers</a></li>
                </ul>
              </div>
            </div>
            <div className="services-list">
              <div className="srv-number srv-08">08</div>
              <h6>Food and Beverage</h6>
              <div className="srv-text">
                <ul>
                  <li><a href="#">Restaurants</a></li>
                  <li><a href="#">Catering Services</a></li>
                  <li><a href="#">Food Trucks</a></li>
                  <li><a href="#">Bakeries</a></li>
                </ul>
              </div>
            </div>
            <div className="services-list">
              <div className="srv-number srv-09">09</div>
              <h6>Jewelry and Accessories</h6>
              <div className="srv-text">
                <ul>
                  <li><a href="#">Jewelry Stores</a></li>
                  <li><a href="#">Watch Retailers</a></li>
                  <li><a href="#">Custom Jewelers</a></li>
                </ul>
              </div>
            </div>
            <div className="services-list">
              <div className="srv-number srv-10">10</div>
              <h6>Education/Training Services</h6>
              <div className="srv-text">
                <ul>
                  <li><a href="#">Driving Schools</a></li>
                  <li><a href="#">Tutoring Services</a></li>
                  <li><a href="#">Language Schools</a></li>
                  <li><a href="#">Music Schools</a></li>
                  <li><a href="#">Art Schools</a></li>
                  <li><a href="#">Dance Studios</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="button-box">
            <a className="button" href="#">Book a Call</a>
          </div>
        </div>
      </section>
      <section className="item-box faq">
        <div className="wrapper">
          <h3 className="center">How can We Help</h3>
          <div className="item-text center">
            Sed rhoncus sem sit amet lacinia congue. Phasellus eu feugiat sapien.
            Suspendisse potenti. Sed cursus lectus id ultrices scelerisque. Etiam
            tincidunt consectetur augue, sit amet vestibulum lectus aliquet ac.
          </div>
          {/* <div className="accordion" id="accordion-fze">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingone">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseone"
                  aria-expanded="true"
                  aria-controls="collapseone" >
                  Maecenas eget convallis tortor, eu elementum felis. Sed porta
                  ipsum eget ex eleifend aliquet. Pellentesque tristique euismod
                  bibendum?
                </button>
              </h2>
              <div
                id="collapseone"
                className="accordion-collapse collapse show"
                aria-labelledby="headingone"
                data-bs-parent="#accordion-fze">
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
                  aria-controls="collapsetwo" >
                  Sed rhoncus sem sit amet lacinia congue. Phasellus eu feugiat
                  sapien. Suspendisse potenti?
                </button>
              </h2>
              <div
                id="collapsetwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingtwo"
                data-bs-parent="#accordion-fze" >
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
                  aria-controls="collapsethree">
                  Sed rhoncus sem sit amet lacinia congue. Phasellus eu feugiat
                  sapien. Suspendisse potenti?
                </button>
              </h2>
              <div
                id="collapsethree"
                className="accordion-collapse collapse"
                aria-labelledby="headingthree"
                data-bs-parent="#accordion-fze" >
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
                  aria-controls="collapsefour" >
                  Nunc velit dui, tincidunt at malesuada eu, porta et sem.
                  Curabitur hendrerit metus magna, nec rhoncus sem auctor
                  ultricies. Mauris a fringilla mauris?
                </button>
              </h2>
              <div
                id="collapsefour"
                className="accordion-collapse collapse"
                aria-labelledby="headingfour"
                data-bs-parent="#accordion-fze">
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
                  aria-controls="collapsefive" >
                  Donec venenatis quis nibh a elementum. Donec euismod euismod
                  velit, quis placerat erat venenatis in?
                </button>
              </h2>
              <div
                id="collapsefive"
                className="accordion-collapse collapse"
                aria-labelledby="headingfive"
                data-bs-parent="#accordion-fze">
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
                  aria-controls="collapsesix">
                  Cras sed lacus ac mi gravida posuere. Donec convallis turpis eu
                  consectetur fringilla?
                </button>
              </h2>
              <div
                id="collapsesix"
                className="accordion-collapse collapse"
                aria-labelledby="headingsix"
                data-bs-parent="#accordion-fze">
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
          </div> */}
                            <div className="accordion" id="accordion-fze">
            {accordionData.map(({ id, title, content }) => (
                <div className="accordion-item" key={id}>
                    <h2 className="accordion-header" id={`heading${id}`}>
                        <button
                            className={`accordion-button ${openItem === id ? "" : "collapsed"}`}
                            type="button"
                            onClick={() => toggleItem(id)}
                            aria-expanded={openItem === id}
                            aria-controls={`collapse${id}`}
                        >
                            {title}
                        </button>
                    </h2>
                    <div
                        id={`collapse${id}`}
                        className={`accordion-collapse collapse ${openItem === id ? "show" : ""}`}
                        aria-labelledby={`heading${id}`}
                    >
                        <div className="accordion-body">{content}</div>
                    </div>
                </div>
            ))}
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
          <div className="box-lists">
            <div className="list-item">
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
            <div className="list-item">
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
            <div className="list-item">
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
          </div>
          <div className="button-box">
            <a href="#" className="button">View All</a>
          </div>
        </div>
      </section>
    </>

  )
}
export default Industries;