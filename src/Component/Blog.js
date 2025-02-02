import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { BaseURL } from "../constant/BaseUrl.js";
import client1 from "../images/client-01.png";
import client2 from "../images/client-02.png";
import client3 from "../images/client-03.png";
import News1 from "../images/news/news1.webp";
import News2 from "../images/news/news2.webp";
import News3 from "../images/news/news3.webp";

function Blog() {
  const [service, setService] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [data, setData] = useState([]);

  // Handle input changes
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

  // Fetch blog data
  const GetData = async () => {
    try {
      const res = await axios.get(`${BaseURL}/all-blog`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching blog data", error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const formattedDate = moment().format("DD MMM, YYYY");

  // Reusable component for displaying blog posts
  const BlogItem = ({ item }) => (
    <div className="col-md-4">
      <img
        src={`${BaseURL}/uploads/${item.image}`}
        width="100%"
        alt={item.title}
      />
      <div className="news-part">
        <div className="date">{formattedDate}</div>
        <div className="admin">
          <i className="fa fa-user"></i> By Admin
        </div>
        <h5>{item.title}</h5>
        <p>{item.description}</p>
        <Link to={`/blog-details/${item._id}`}>
          <a href="" className="button">
            View All
          </a>
        </Link>
      </div>
    </div>
  );

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
                <a className="button" href="#">
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="breadcrumb">
        <div className="wrapper">
          <ul>
            <Link to="/">
              <li>
                <a href="">Home</a>
              </li>
            </Link>
            <li>Blog</li>
          </ul>
        </div>
      </section>

      <section className="news-panel item-box professional">
        <div className="wrapper">
          <h3 className="center">
            <span>News & Articles</span> Blogs
          </h3>
          <div className="item-text center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            fringilla erat, eget ornare orci ultricies at. Aliquam eget laoreet
            ligula. Praesent mattis consequat ex, a condimentum magna gravida non.
          </div>
          <div className="row align-items-center mt-4">
            {currentItems.map((item) => (
              <BlogItem key={item._id} item={item} />
            ))}
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-md-12 text-center mt-3">
              <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={prevPage}>
                      <i className="fa fa-angle-left"></i>
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li
                      key={i + 1}
                      className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li
                    className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                  >
                    <button className="page-link" onClick={nextPage}>
                      <i className="fa fa-angle-right"></i>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="item-box feedback">
        <div className="wrapper">
          <h3 className="center">
            <span>Clients</span> Feedback for RZ
          </h3>
          <div className="item-text center">
            Vivamus ante ipsum, laoreet sagittis convallis a, efficitur et
            tellus. Integer id felis nec mi pharetra elementum ullamcorper sit
            amet dolor.
          </div>
          <div className="box-lists">
            <ClientFeedback
              img={client1}
              name="Usman Khaljee"
              position="Communications Director"
              feedback="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ClientFeedback
              img={client2}
              name="Christopher Ethan"
              position="Chief Learning Officer"
              feedback="Nunc a lorem purus. Proin placerat, metus vitae faucibus."
            />
            <ClientFeedback
              img={client3}
              name="Isabella Evelyn"
              position="Managing Director"
              feedback="Roin elementum dolor in eros sollicitudin vestibulum."
            />
          </div>
          <div className="button-box">
            <a href="#" className="button">
              View All
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// Client Feedback component
const ClientFeedback = ({ img, name, position, feedback }) => (
  <div className="list-item">
    <div className="client-img">
      <img src={img} alt={name} />
    </div>
    <h5>{name}</h5>
    <h6>{position}</h6>
    <div className="item-text">{feedback}</div>
    <div className="item-link">
      <a href="#">Read More</a>
    </div>
  </div>
);

export default Blog;
