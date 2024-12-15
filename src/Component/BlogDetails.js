import { Link } from "react-router-dom";
import client1 from "../images/client-01.png"
import client2 from "../images/client-02.png"
import client3 from "../images/client-03.png"
import News1 from "../images/news/news1.webp"
import News2 from "../images/news/news2.webp"
import News3 from "../images/news/news3.webp"

function BlogDetails() {
  return (
    <>
    <section className="banner">
      <div className="wrapper">
        <div className="banner-area bannerform">
          <div className="banner-right">
            <section className="item-box service">
              <form action="">
                <div className="form-box">
                  <div className="list-items">
                    <div className="list-item">
                      <label for="name">Name<span>*</span></label>
                      <input id="name" type="text" name="name" />
                    </div>
                    <div className="list-item">
                      <label for="email">Email<span>*</span></label>
                      <input id="email" type="text" name="email" />
                    </div>
                  </div>
                  <div className="list-items">
                    <div className="list-item">
                      <label for="phone">Phone<span>*</span></label>
                      <input id="phone" type="text" name="phone" />
                    </div>
                    <div className="list-item">
                      <label for="services">Select Service<span>*</span></label>
                      <select
                        id="services"
                        name="services"
                        className="form-select"
                        aria-label="Default select example">
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
                  <div className="list-item">
                    <label for="message"
                      >Message/Requirements<span>*</span></label >
                    <textarea id="message" ></textarea>
                  </div>
                  <div className="list-item check-items">
                    <div className="list-text form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="approve" />
                      <label className="form-check-label" for="approve">
                        I approve RZ Web Media to Contact me</label>
                    </div>
                    <div className="list-text">
                      Attach files Select from your
                      <a href="#">Computer</a> or <a href="#">Google Docs</a> or
                      <a href="#">Dropbox Url</a>
                    </div>
                  </div>
                  <div className="button-box">
                    <button className="button">Book a Appointment</button>
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
        <ul><Link to="/" >
          <li><a href="index.html">Home</a></li>
          </Link>
        
          <li>Blog Details</li>
         
        </ul>
      </div>
    </section>

	<section className="blog-details-wrapper">
	    <div className="container">
	        <div className="row">
	            <div className="col-lg-8">
	                <div className="blog__details__left bg-light p-3">
	                    <div className="single-blog__inner">
	                        <div className="tj-blog-inner">
	                            <div className="tj-info-bg style-2"><img src={News1} width="100%" alt="" /></div>
	                            <div className="blog__meta mb-3">
	                                <div className="tjblog_author"><a href="#"><i className="fal fa-user-circle"></i> By Admin</a></div>
	                                <div className="tjblog_date"><i className="fa-light fa-calendar-days"></i> January 2, 2023</div>
	                            </div>
	                            <h4>Lorem Ipsum is simply dummy text of the printing.</h4>
	                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	                            
	                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	                            
	                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
	                        </div>
	                    </div>
	                </div>
	            </div>

	            <div className="col-lg-4">
	                <div className="blog__details__right">
	                    <div className="tj-common-blog tj-main-service">
	                        <h3 className="sidebar__title">Popular Post</h3>
	                        <div className="tj-single-common">
	                            <div className="tj-blog-img"><div className="tj-img"><img src={News1} alt="" /></div></div>
	                            <div className="tj-content">
	                                <div className="sidebar__post-content-meta">
	                                    <div className="tj-date"><a href="#"><i className="fa-regular fa-calendar-days"></i> June 13</a></div>
	                                </div>
	                                <h6><a href="#">This Place Really Place For Awesome Moment</a></h6>
	                            </div>
	                        </div>
	                        <div className="tj-single-common">
	                            <div className="tj-blog-img"><div className="tj-img"><img src={News2} alt=""/></div></div>
	                            <div className="tj-content">
	                                <div className="sidebar__post-content-meta">
	                                    <div className="tj-date"><a href="#"><i className="fa-regular fa-calendar-days"></i> June 13</a></div>
	                                </div>
	                                <h6><a href="#">This Place Really Place For Awesome Moment</a></h6>
	                            </div>
	                        </div>
							<div className="tj-single-common">
	                            <div className="tj-blog-img"><div className="tj-img"><img src={News3} alt=""/></div></div>
	                            <div className="tj-content">
	                                <div className="sidebar__post-content-meta">
	                                    <div className="tj-date"><a href="#"><i className="fa-regular fa-calendar-days"></i> June 13</a></div>
	                                </div>
	                                <h6><a href="#">This Place Really Place For Awesome Moment</a></h6>
	                            </div>
	                        </div>
	                    </div>

	                </div>

					<div className="tj-main-service sidebar-widget">
						<h3 className="sidebar__title">Categories</h3>
						<ul>
							<li><a href="#">Web Designing</a><span>(2)</span></li>
							<li><a href="#">Web Development</a><span>(7)</span></li>
							<li><a href="#">SEO</a><span>(1)</span></li>
							<li><a href="#">SMO</a><span>(1)</span></li>
							<li><a href="#">Ecommerce Website</a><span>(1)</span></li>
							<li><a href="#">Mobile App</a><span>(1)</span></li>
						</ul>
					</div>
	            </div>
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
export default  BlogDetails;