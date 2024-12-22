import { Link } from "react-router-dom";
import client1 from "../images/client-01.png"
import client2 from "../images/client-02.png"
import client3 from "../images/client-03.png"
import News1 from "../images/news/news1.webp"
import News2 from "../images/news/news2.webp"
import News3 from "../images/news/news3.webp"
import {BaseURL}  from "../constant/BaseUrl.js";
import { useEffect, useState } from "react";
import axios from "axios";

function Blog() {
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
  const [data, setData] = useState([])
const GetData=async()=>{
 const res=await axios.get(`${BaseURL}/all-blog`)
 setData(res.data)
}
console.log(data)
useEffect(()=>{
  GetData()
},[])
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
          <li><a href="index.html">Home</a></li>
          </Link>
         
          <li>Blog</li>
          
        </ul>
      </div>
    </section>

    <section className="news-panel item-box professional">
      <div className="wrapper">
        <h3 className="center"><span>News & Articles</span> Blogs</h3>
        <div className="item-text center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor fringilla erat, eget ornare orci ultricies at. Aliquam eget laoreet ligula. Praesent mattis consequat ex, a condimentum magna gravida non.
        </div>
        
        <div className="row align-items-center mt-4">
        {data?.map((item) => (
           <div className="col-md-4">
           <img src={`${BaseURL}/uploads/${item.image}`} width="100%" alt="" />
           <div className="news-part">
             <div className="date">25 Aug, 2024</div>
             <div className="admin"><i className="fa fa-user"></i> By Admin</div>
             <h5>{item.title}</h5>
             <p>{item.description}.</p>
           <Link to="/blog-details">
             <a href="blog-details.html" className="button">View All</a>
             </Link>
           </div>
         </div>
          ))}
        	
        	{/* <div className="col-md-4">
        		<img src={News2} width="100%" alt="" />
	        	<div className="news-part">
		        	<div className="date">15 July, 2024</div>
		        	<div className="admin"><i className="fa fa-user"></i> By Admin</div>
		        	<h5>It is a long established fact that a reader</h5>
		        	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
		        
              <Link to="/blog-details">
              	<a href="blog-details.html" className="button">View All</a>
                </Link>
	        	</div>
        	</div>
        	<div className="col-md-4">
        		<img src={News3} width="100%" alt="" />
	        	<div className="news-part">
		        	<div className="date">22 July, 2024</div>
		        	<div className="admin"><i className="fa fa-user"></i> By Admin</div>
		        	<h5>It is a long established fact that a reader</h5>
		        	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
              <Link to="/blog-details">
              <a href="blog-details.html" className="button">View All</a>
              </Link>
	        	</div>
        	</div>

			<div className="col-md-4">
        		<img src={News1} width="100%" alt="" />
	        	<div className="news-part">
		        	<div className="date">25 Aug, 2024</div>
		        	<div className="admin"><i className="fa fa-user"></i> By Admin</div>
		        	<h5>It is a long established fact that a reader</h5>
		        	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
              <Link to="/blog-details">
              <a href="blog-details.html" className="button">View All</a>
              </Link>
	        	</div>
        	</div>
        	<div className="col-md-4">
        		<img src={News2} width="100%" alt="" />
	        	<div className="news-part">
		        	<div className="date">15 July, 2024</div>
		        	<div className="admin"><i className="fa fa-user"></i> By Admin</div>
		        	<h5>It is a long established fact that a reader</h5>
		        	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
		        	
              <Link to="/blog-details">
              <a href="blog-details.html" className="button">View All</a>
              </Link>
	        	</div>
        	</div>
        	<div className="col-md-4">
        		<img src={News3} width="100%" alt="" />
	        	<div className="news-part">
		        	<div className="date">22 July, 2024</div>
		        	<div className="admin"><i className="fa fa-user"></i> By Admin</div>
		        	<h5>It is a long established fact that a reader</h5>
		        	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
		        	
              <Link to="/blog-details">
              <a href="blog-details.html" className="button">View All</a>
              </Link>
	        	</div>
        	</div> */}
        </div>
          
         <div className="row justify-content-center mt-4">
			<div className="col-md-12 text-center mt-3">
				<nav aria-label="Page navigation example">
					<ul className="pagination justify-content-center">
						<li className="page-item active"><a className="page-link" href="#">1</a></li>
						<li className="page-item"><a className="page-link" href="#">2</a></li>
						<li className="page-item"><a className="page-link" href="#">3</a></li>
						<li className="page-item"><a className="page-link" href="#"><i className="fa-regular fa-angle-right"></i></a></li>
					</ul>
				</nav>
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
export default  Blog;