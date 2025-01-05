import React, { useState, useEffect } from "react";
import {BaseURL}  from "../constant/BaseUrl.js";

import axios from "axios";
function BlogForm(){
    const [file, setFile] = useState();
const [successMessage, setSuccessMessage] = useState();
const [errorMessage, setErrorMessage] = useState();
const [newUser, setNewUser] = useState({

    description: '',
    title: '',
    blogimage: '', // This will hold the file reference
});

const handleSubmit = (e) => {
  e.preventDefault();

  // Prepare FormData
  const formData = new FormData();
  formData.append('blogimage', newUser.blogimage);
  formData.append('title', newUser.title);
  formData.append('description', newUser.description);

  // Post the form data
  axios.post(`${BaseURL}/blog`, formData)
       .then((res) => {
          console.log(res.data);
          window.location.reload()
          // Clear file and form data after successful submission
          setFile(null); // Reset the previewed file
          setNewUser({
            
            description: '',
            title: '',
            blogimage: '', // Reset the blogimage file reference
          });
          setSuccessMessage('Blog post successfully created!');
          setErrorMessage(null);  // Clear any previous error messages
       })
       .catch((err) => {
          console.error(err);
          setErrorMessage('Failed to create blog post.');
          setSuccessMessage(null);
       });
}

const handleChange = (e) => {
  const { name, value } = e.target;
  setNewUser(prevState => ({
    ...prevState,
    [name]: value,
  }));
}

const handlePhoto = (e) => {
  const file = e.target.files[0]; // Get the file object
  setNewUser(prevState => ({
    ...prevState,
    blogimage: file, // Update the file reference in the form state
  }));
  setFile(URL.createObjectURL(file)); // Create the file preview URL
}
    return (

        <div>
                <section class="breadcrumb">
      <div class="wrapper">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li>Blog</li>
        </ul>
      </div>
    </section>

    <section class="news-panel item-box professional fxt-template-layout2">
      <div class="container">
        <h3 class="center"><span>News & Articles</span> Blogs</h3>
        
        <div class="row align-items-center mt-4">
        	<div class="col-xl-6 offset-xl-3 text-center">
		        <div class="fxt-form">
					<form onSubmit={handleSubmit} encType='multipart/form-data'>
						<div class="form-group">
									<div class="fxt-transformY-50 fxt-transition-delay-1">
										<input type="file"  id="file"  name="profileimage" accept="image/png, image/jpeg"  class="form-control"   onChange={handlePhoto}  />
									</div>
						</div>
						<div class="form-group">
							<div class="fxt-transformY-50 fxt-transition-delay-2">
							<input type="text" class="form-control" name="title" placeholder="Title"   value={newUser.title}
                 onChange={handleChange} required />
							</div>
						</div>
						<div class="form-group">
									<div class="fxt-transformY-50 fxt-transition-delay-2">
										<textarea id="description" placeholder="Description" class="form-control" name="description"  value={newUser.description}
                 onChange={handleChange}></textarea>
									</div>
						</div>
								<div class="form-group">
									<div class="fxt-transformY-50 fxt-transition-delay-4">
										<button  type="submit" class="fxt-btn-fill">Upload</button>
									</div>
								</div>
					</form>
						</div>
		        	
        	</div>
        </div>
      </div>
    </section>
        </div>
    )
}
export default BlogForm;