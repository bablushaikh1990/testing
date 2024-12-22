import { Link } from "react-router-dom";
import client1 from "../images/client-01.png"
import client2 from "../images/client-02.png"
import client3 from "../images/client-03.png"
import {BaseURL}  from "../constant/BaseUrl.js";
import { useState } from "react";
import axios from "axios";
function State(){
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
    const { name, email,phone,service,message } = user;
   
      axios.post(`${BaseURL}/contact`, user)
        .then((res) => {
          console.log()
        //  setService(res.data.message)
         
        })
  }
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
                                            <div className="list-text form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="approve"
                                                />
                                                <label className="form-check-label" for="approve"
                                                >I approve RZ Web Media to Contact me</label
                                                >
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
          <li><a href=" ">Home</a></li>
          </Link>
          <li>State We Serve</li>
        </ul>
      </div>
    </section>
    <section className="item-box professional no-bg">
      <div className="wrapper">
        <h3 className="center"><span>States</span> We Serve</h3>
        <div className="item-text center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          fringilla erat, eget ornare orci ultricies at. Aliquam eget laoreet
          ligula. Praesent mattis consequat ex, a condimentum magna gravida non.
        </div>
      </div>
    </section>
    <section className="item-box our-services">
      <div className="wrapper">
        <h3 className="center"><span>We Serve</span> All over States</h3>
        <div className="item-text center">
          Vivamus faucibus eu nulla nec mollis. Curabitur vitae eros vitae augue
          luctus mattis sed vitae risus. Vivamus ullamcorper congue ullamcorper.
          Quisque congue, lectus quis egestas congue, mi orci facilisis sapien,
          nec posuere est ex.
        </div>
        <div className="state-list">
          <ul className="list">
            <li><a href="alabama.html">Alabama</a></li>
            <li><a href="#">Alaska</a></li>
            <li><a href="#">Arizona</a></li>
            <li><a href="#">Arkansas</a></li>
            <li><a href="#">California</a></li>
            <li><a href="#">Colorado</a></li>
            <li><a href="#">Connecticut</a></li>
            <li><a href="#">Delaware</a></li>
            <li><a href="#">Florida</a></li>
            <li><a href="#">Georgia</a></li>
            <li><a href="#">Hawaii</a></li>
            <li><a href="#">Idaho</a></li>
            <li><a href="#">Idaho</a></li>
            <li><a href="#">Indiana</a></li>
            <li><a href="#">Iowa</a></li>
            <li><a href="#">Kansas</a></li>
            <li><a href="#">Kentucky</a></li>
            <li><a href="#">Louisiana</a></li>
            <li><a href="#">Maine</a></li>
            <li><a href="#">Maryland</a></li>
            <li><a href="#">Massachusetts</a></li>
            <li><a href="#">Michigan</a></li>
            <li><a href="#">Minnesota</a></li>
            <li><a href="#">Mississippi</a></li>
            <li><a href="#">Missouri</a></li>
            <li><a href="#">Montana</a></li>
            <li><a href="#">Nebraska</a></li>
            <li><a href="#">Nevada</a></li>
            <li><a href="#">New Hampshire</a></li>
            <li><a href="#">New Jersey</a></li>
            <li><a href="#">New Mexico</a></li>
            <li><a href="#">New York</a></li>
            <li><a href="#">North Carolina</a></li>
            <li><a href="#">North Dakota</a></li>
            <li><a href="#">Ohio</a></li>
            <li><a href="#">Oklahoma</a></li>
            <li><a href="#">Oregon</a></li>
            <li><a href="#">Pennsylvania</a></li>
            <li><a href="#">Rhode Island</a></li>
            <li><a href="#">South Carolina</a></li>
            <li><a href="#">South Dakota</a></li>
            <li><a href="#">Tennessee</a></li>
            <li><a href="#">Texas</a></li>
            <li><a href="#">Utah</a></li>
            <li><a href="#">Vermont</a></li>
            <li><a href="#">Virginia</a></li>
            <li><a href="#">Washington</a></li>
            <li><a href="#">West Virginia</a></li>
            <li><a href="#">Wisconsin</a></li>
            <li><a href="#">Wyoming</a></li>
          </ul>
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
export default State;