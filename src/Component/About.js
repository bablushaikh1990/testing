import { Link } from "react-router-dom";
import client1 from "../images/client-01.png"
import client2 from "../images/client-02.png"
import client3 from "../images/client-03.png"
import client01 from "../images/clients/client01.png"
import client02 from "../images/clients/client02.png"
import client03 from "../images/clients/client03.png"
import client04 from "../images/clients/client04.png"
import client05 from "../images/clients/client05.png"
import client06 from "../images/clients/client06.png"
import client07 from "../images/clients/client07.png"
import client08 from "../images/clients/client08.png"
import client09 from "../images/clients/client09.png"
import client010 from "../images/clients/client010.png"
import client011 from "../images/clients/client011.png"
function About() {
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
                                        <div className="list-item">
                                            <label for="message"
                                            >Message/Requirements<span>*</span></label>
                                            <textarea id="message"></textarea>
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
                       
                        <li>About</li>
                       
                    </ul>
                </div>
            </section>
            <section className="item-box profile">
                <div className="wrapper">
                    <h3 className="center">
                        <span>Profile</span> RZ Web Media is to Provide End to End Services
                    </h3>
                    <div className="item-text center">
                        Ut consectetur, tortor non maximus maximus, nulla felis fermentum leo,
                        nec pretium ipsum arcu in magna. Pellentesque venenatis nec quam in
                        scelerisque. Sed non elit eget elit efficitur porttitor. Suspendisse
                        dictum pretium odio ac euismod. In hac habitasse platea dictumst.
                    </div>
                </div>
            </section>
            <section className="item-box clients">
                <div className="wrapper">
                    <h3 className="center">
                        <span>Clients</span> Elated to have Won the Trust of Brands Like
                    </h3>
                    <div className="item-text center">
                        Donec a dui ut eros semper imperdiet. Quisque at dictum erat, a
                        finibus urna. Fusce eget dui ac enim mollis rutrum in at quam. Quisque
                        quis massa hendrerit, malesuada augue a, iaculis dolor. Donec congue,
                        felis at finibus tempus, ante quam scelerisque sem, ut finibu velit
                        felis ut magna. Phasellus sed tristique enim.
                    </div>
                    <div className="clients-list">
                        <span><img src={client01} alt="clients" /></span>
                        <span><img src={client02} alt="clients" /></span>
                        <span><img src={client03} alt="clients" /></span>
                        <span><img src={client04} alt="clients" /></span>
                        <span><img src={client05} alt="clients" /></span>
                        <span><img src={client06} alt="clients" /></span>
                        <span><img src={client07} alt="clients" /></span>
                        <span><img src={client08} alt="clients" /></span>
                        <span><img src={client09} alt="clients" /></span>
                        <span><img src={client010} alt="clients" /></span>
                        <span><img src={client011} alt="clients" /></span>
                      
                    </div>
                    <div className="button-box">
                        <a href="#" className="button">Book a Call</a>
                    </div>
                </div>
            </section>
            <section className="item-box choose">
                <div className="wrapper">
                    <h3 className="center"><span>Why Choose</span> RZ Web Media</h3>
                    <div className="item-text center">
                        Ut consectetur, tortor non maximus maximus, nulla felis fermentum leo,
                        nec pretium ipsum arcu in magna. Pellentesque venenatis nec quam in
                        scelerisque. Sed non elit eget elit efficitur porttitor. Suspendisse
                        dictum pretium odio ac euismod.
                    </div>
                    <div className="box-lists">
                        <div className="list-item">
                            <div className="icon choose01">icon</div>
                            <div className="item-text">
                                <span>2012</span>
                                Established
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="icon choose02">icon</div>
                            <div className="item-text">
                                <span>150+</span>
                                Number of Employees
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="icon choose03">icon</div>
                            <div className="item-text">
                                <span>660+</span>
                                Clients World Wide
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="icon choose04">icon</div>
                            <div className="item-text">
                                <span>Top 1%</span>
                                Developers & Designers
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="icon choose05">icon</div>
                            <div className="item-text">
                                <span>Certify</span>
                                Clutch many More
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="icon choose02">icon</div>
                            <div className="item-text">
                                <span>30+%</span>
                                YOY Organic Revenue
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="icon choose03">icon</div>
                            <div className="item-text">
                                <span>6000</span>
                                Global Delivery Centre
                            </div>
                        </div>
                        <div className="list-item">
                            <div className="icon choose04">icon</div>
                            <div className="item-text">
                                <span>12+</span>
                                Awards
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="item-box help">
                <div className="wrapper">
                    <h3 className="center">
                        <span>Our Story</span> Enhancing Business Effectiveness with Technical
                        Solutions
                    </h3>
                    <div className="item-text center">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            dictum, ipsum eget scelerisque condimentum, libero eros scelerisque
                            est, at convallis quam risus ut magna. Duis dapibus feugiat
                            bibendum. Fusce aliquet turpis et suscipit laoreet. Pellentesque
                            dictum tortor odio, eu semper elit malesuada eu. Mauris sit amet
                            sapien sed dolor ultrices ultricies. Curabitur est lorem, egestas
                            vitae est eu, egestas porttitor urna. Sed dolor felis, sollicitudin
                            at ex in, venenatis suscipit libero.
                        </p>
                        <p>
                            In hac habitasse platea dictumst. Vivamus bibendum purus quam, eu
                            elementum magna elementum sed. Aenean tempus nisl vel arcu
                            consectetur sodales. Nam a purus ac eros porta egestas. Orci varius
                            natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus nulla facilisi
                        </p>
                    </div>
                    <div className="box-lists">
                        <div className="list-item">
                            <h5>WHAT WE VALUE</h5>
                            <div className="item-text">
                                Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus nulla facilisi
                            </div>
                        </div>
                        <div className="list-item">
                            <h5>WHAT WE ENVISION</h5>
                            <div className="item-text">
                                Fusce aliquet turpis et suscipit laoreet. Pellentesque dictum
                                tortor odio, eu semper elit malesuada eu.
                            </div>
                        </div>
                        <div className="list-item">
                            <h5>WHAT WE BELIEVE</h5>
                            <div className="item-text">
                                Phasellus dictum, ipsum eget scelerisque condimentum, libero eros
                                scelerisque est, at convallis quam risus ut magna.
                            </div>
                        </div>
                    </div>
                    <div className="button-box center">
                        <a href="#" className="button">Book a Call</a>
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
export default About;