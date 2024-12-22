import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home.js';
import Footer from './Component/Footer.js';
import Header from './Component/Header.js';
import About from "./Component/About.js";
import Industries from './Component/Industries.js';
import State from './Component/State.js';
import Technology from './Component/Technology.js';
import Service from './Component/Services.js';
import IndustriesInner from './Component/IndustriesInner.js';
import ServicesInner from "./Component/ServicesInner.js"
import TechnologyInner from './Component/TechnologyInner.js';
import Blog from './Component/Blog.js';
import BlogDetails from './Component/BlogDetails.js';

function App() {
  
  return (
   <>
<Header />
   <Routes>
   <Route path="/" element={<Home></Home>}  exact />
   <Route path="/about" element={<About></About>} /> 
   <Route path="/industries" element={<Industries></Industries>} exact/> 
   <Route path="/state" element={<State></State>}  exact /> 
   <Route path="/technology" element={<Technology></Technology>}  exact /> 
   <Route path="/service" element={<Service></Service>} /> 
   <Route path="/industries-inner" element={<IndustriesInner></IndustriesInner>} exact /> 
   <Route path="/service-inner" element={<ServicesInner></ServicesInner>} exact /> 
   <Route path="/technology-inner" element={<TechnologyInner></TechnologyInner>} exact /> 
   <Route path="/blog" element={<Blog></Blog>} exact /> 

   <Route path="/blog-details" element={<BlogDetails></BlogDetails>} exact /> 

 </Routes>
 <Footer/>
   </>
  );
}


export default App;
