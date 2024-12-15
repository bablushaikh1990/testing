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
   <Route path="/" element={<Home></Home>} />
   <Route path="/about" element={<About></About>} /> 
   <Route path="/industries" element={<Industries></Industries>} /> 
   <Route path="/state" element={<State></State>} /> 
   <Route path="/technology" element={<Technology></Technology>} /> 
   <Route path="/service" element={<Service></Service>} /> 
   <Route path="/industries-inner" element={<IndustriesInner></IndustriesInner>} /> 
   <Route path="/service-inner" element={<ServicesInner></ServicesInner>} /> 
   <Route path="/technology-inner" element={<TechnologyInner></TechnologyInner>} /> 
   <Route path="/blog" element={<Blog></Blog>} /> 

   <Route path="/blog-details" element={<BlogDetails></BlogDetails>} /> 

 </Routes>
 <Footer/>
   </>
  );
}


export default App;
