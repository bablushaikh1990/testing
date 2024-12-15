import { Link } from "react-router-dom";
import client1 from "../images/client-01.png"
import client2 from "../images/client-02.png"
import client3 from "../images/client-03.png"
function TechnologyInner() {
    return (
        <>
        <section class="banner">
      <div class="wrapper">
        <div class="banner-area bannerform">
          <div class="banner-right">
            <section class="item-box service">
              <form action="">
                <div class="form-box">
                  <div class="list-items">
                    <div class="list-item">
                      <label for="name">Name<span>*</span></label>
                      <input id="name" type="text" name="name" />
                    </div>
                    <div class="list-item">
                      <label for="email">Email<span>*</span></label>
                      <input id="email" type="text" name="email" />
                    </div>
                  </div>
                  <div class="list-items">
                    <div class="list-item">
                      <label for="phone">Phone<span>*</span></label>
                      <input id="phone" type="text" name="phone" />
                    </div>
                    <div class="list-item">
                      <label for="services">Select Service<span>*</span></label>
                      <select
                        id="services"
                        name="services"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option value="Web Development" selected>
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
                  <div class="list-item">
                    <label for="message"
                      >Message/Requirements<span>*</span></label
                    >
                    <textarea id="message" ></textarea>
                  </div>
                  <div class="list-item check-items">
                    <div class="list-text form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="approve"
                      />
                      <label class="form-check-label" for="approve"
                        >I approve RZ Web Media to Contact me</label
                      >
                    </div>
                    <div class="list-text">
                      Attach files Select from your
                      <a href="#">Computer</a> or <a href="#">Google Docs</a> or
                      <a href="#">Dropbox Url</a>
                    </div>
                  </div>
                  <div class="button-box">
                    <button class="button">Book a Appointment</button>
                  </div>
                </div>
              </form>
            </section>
          </div>
          <div class="banner-left">
            <div class="banner-title">Social ideas for Your</div>
            <div class="banner-title">
              <span>BRANDS <br />HERE</span> With Full Solutions
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div class="button-box">
              <a class="button" href="#">Book a Call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="breadcrumb">
      <div class="wrapper">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="technology.html">Technology</a></li>
          <li>Web Technologies</li>
          <li>Node.js Development</li>
        </ul>
      </div>
    </section>
    <section class="item-box professional">
      <div class="wrapper">
        <h3 class="center">
          <span>Web Technologies</span> Node.js Development
        </h3>
        <div class="item-text center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          fringilla erat, eget ornare orci ultricies at. Aliquam eget laoreet
          ligula. Praesent mattis consequat ex, a condimentum magna gravida non.
        </div>
        <div class="services-box">
          <div class="services-list">
            <div class="srv-number">01</div>
            <h6>Real time Applications</h6>
            <div class="srv-text">
              Vivamus faucibus eu nulla nec mollis. Curabitur vitae eros vitae
              augue luctus mattis sed vitae risus. Vivamus ullamcorper congue
              ullamcorper. Quisque congue, lectus quis egestas congue, mi orci
              facilisis sapien, nec posuere est ex vel lacus ...
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="services-list">
            <div class="srv-number">02</div>
            <h6>Serverless Node.js Microservice</h6>
            <div class="srv-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor fringilla erat, eget ornare orci ultricies at. Aliquam eget
              laoreet ligula. Praesent mattis consequat ex, a condimentum magna
              gravida non ...
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="services-list">
            <div class="srv-number">03</div>
            <h6>Node.js Support & Maintenance</h6>
            <div class="srv-text">
              Nulla in eros leo. Pellentesque euismod, nunc id convallis
              elementum, lectus ligula sagittis ipsum, in finibus ex justo id
              felis. Sed scelerisque vitae velit et volutpat. Curabitur enim
              orci, lacinia sit amet lobortis et ...
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="services-list">
            <div class="srv-number">04</div>
            <h6>Enterprise Web Applications</h6>
            <div class="srv-text">
              Euismod ac lorem. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Vestibulum lacinia,
              dolor at ultricies tristique, velit neque placerat nisl, rutrum
              cursus mauris sapien at quam. Nam at sodales diam ...
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="services-list">
            <div class="srv-number">05</div>
            <h6>Node.js Consulting</h6>
            <div class="srv-text">
              Pellentesque euismod, nunc id convallis elementum, lectus ligula
              sagittis ipsum, in finibus ex justo id felis. Sed scelerisque
              vitae velit et. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posu cubilia curae; Vestibulum lacinia ...
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="services-list">
            <div class="srv-number">06</div>
            <h6>IoT Solutions with Node-Red</h6>
            <div class="srv-text">
              Curabitur enim orci, lacinia sit amet lobortis et, euismod ac
              lorem. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posu cubilia curae; Vestibulum lacinia. Curabitur enim
              orci, lacinia sit amet lobortis et, euismod ac lorem ...
              <a href="#">Read More</a>
            </div>
          </div>
          <div class="services-list">
            <div class="srv-number">07</div>
            <h6>Application Migration</h6>
            <div class="srv-text">
              Dolor at ultricies tristique, velit neque placerat nisl, rutrum
              cursus mauris sapien at quam. Nam at sodales diam. Aliquam eget
              laoreet ligula. Praesent mattis consequat ex, a condimentum magna
              gravida non ... <a href="#">Read More</a>
            </div>
          </div>
          <div class="services-list">
            <div class="srv-number">08</div>
            <h6>API Development & Integration</h6>
            <div class="srv-text">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posu cubilia curae; Vestibulum lacinia. Sed scelerisque vitae
              velit et. Vestibulum ante ipsum primis in faucibus orci luctus.
              Curabitur enim orci, lacinia sit amet lobortis et, euismod ac
              lorem ... <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="button-box">
          <a class="button" href="#">Book a Call</a>
        </div>
      </div>
    </section>
    <section class="item-box faq">
      <div class="wrapper">
        <h3 class="center">How can We Help</h3>
        <div class="item-text center">
          Sed rhoncus sem sit amet lacinia congue. Phasellus eu feugiat sapien.
          Suspendisse potenti. Sed cursus lectus id ultrices scelerisque. Etiam
          tincidunt consectetur augue, sit amet vestibulum lectus aliquet ac.
        </div>
        <div class="accordion" id="accordion-fze">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingone">
              <button
                class="accordion-button"
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
              class="accordion-collapse collapse show"
              aria-labelledby="headingone"
              data-bs-parent="#accordion-fze"
            >
              <div class="accordion-body">
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
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingtwo">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              aria-labelledby="headingtwo"
              data-bs-parent="#accordion-fze"
            >
              <div class="accordion-body">
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
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingthree">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              aria-labelledby="headingthree"
              data-bs-parent="#accordion-fze"
            >
              <div class="accordion-body">
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
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingfour">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              aria-labelledby="headingfour"
              data-bs-parent="#accordion-fze"
            >
              <div class="accordion-body">
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
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingfive">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              aria-labelledby="headingfive"
              data-bs-parent="#accordion-fze"
            >
              <div class="accordion-body">
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
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingsix">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              aria-labelledby="headingsix"
              data-bs-parent="#accordion-fze"
            >
              <div class="accordion-body">
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
        <div class="button-box">
          <a href="#" class="button">View More FAQs</a>
        </div>
      </div>
    </section>
    <section class="item-box feedback">
      <div class="wrapper">
        <h3 class="center"><span>Clients</span> Feedback for RZ</h3>
        <div class="item-text center">
          Vivamus ante ipsum, laoreet sagittis convallis a, efficitur et tellus.
          Integer id felis nec mi pharetra elementum ullamcorper sit amet dolor.
          Donec faucibus sagittis dapibus. Nunc a lorem purus. Proin placerat,
          metus vitae faucibus tincidunt, augue metus elementum velit, vel
          fermentum tortor justo sed dui.
        </div>
        <div class="box-lists">
          <div class="list-item">
            <div class="client-img">
              <img src={client1} alt="Usman Khaljee" />
            </div>
            <h5>Usman Khaljee</h5>
            <h6>Communications Director</h6>
            <div class="item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultric gravida. Risus commodo ...
            </div>
            <div class="item-link"><a href="#">Read More</a></div>
          </div>
          <div class="list-item">
            <div class="client-img">
              <img src={client2} alt="Christopher Ethan" />
            </div>
            <h5>Christopher Ethan</h5>
            <h6>Chief Learning Officer</h6>
            <div class="item-text">
              Nunc a lorem purus. Proin placerat, metus vitae faucibus
              tincidunt, augue metus elementum velit, vel fermentum tortor justo
              sed dui ...
            </div>
            <div class="item-link"><a href="#">Read More</a></div>
          </div>
          <div class="list-item">
            <div class="client-img">
              <img src={client3} alt="Isabella Evelyn" />
            </div>
            <h5>Isabella Evelyn</h5>
            <h6>Managing Director</h6>
            <div class="item-text">
              Roin elementum dolor in eros sollicitudin vestibulum. Nunc vel
              efficitur justo. Nulla venenatis vitae massa eu consequat ...
            </div>
            <div class="item-link"><a href="#">Read More</a></div>
          </div>
        </div>
        <div class="button-box">
          <a href="#" class="button">View All</a>
        </div>
      </div>
    </section>    
        </>
    )
    
}
export default TechnologyInner;