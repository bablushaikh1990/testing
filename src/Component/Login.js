import React, { useState } from 'react';
import axios from 'axios';
import { BaseURL } from '../constant/BaseUrl'; // Make sure BaseURL is defined

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // For handling loading state

  // Handle input changes
  const Handler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value, // Dynamically update user object based on input name
    });
  };

  // Login function called on form submission
  const LoginForm = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (!user.email || !user.password) {
      setError('Both fields are required.');
      return; // Prevent making the API request if fields are empty
    }

    setLoading(true); // Start loading
    setError(''); // Reset any previous error

    try {
      const response = await axios.post(`${BaseURL}/login`, user); // Make POST request with user data
      console.log(response); // You can handle successful response here
      setError(''); // Reset error message
      alert('Login successful!'); // For now, you can show an alert on success
      setUser({
        email: "",
        password:""
       

     })
     localStorage.setItem('token', response.data.token);
      // Optionally, store the JWT token (for example, in localStorage)
      // localStorage.setItem('authToken', response.data.token);
    } catch (err) {
      // Handle errors and show appropriate messages
      setError(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false); // Stop loading regardless of success/failure
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={LoginForm}>
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={Handler}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={Handler}
              placeholder="Password"
              required
            />
          </div>
          {error && <div className="error">{error}</div>} {/* Show error if exists */}
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
