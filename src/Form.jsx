import React, { useState } from 'react';
import axios from 'axios';

import "./Form.css";


function Form(){
  // State to store the input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Data to send to the backend
    const data = {
      inputValue: inputValue,
    };

    // Make a POST request to the backend
    axios
      .post("https://your-backend-api-url.com/submit", data)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error sending the data / Data not send provide a valid backend url:", error);
      });
  };

  return (
    <>
      <div className="container" onSubmit={handleSubmit}>
        <form action="">
          <div className="sign-up-form">
            <div className="text">Sign in</div>

            <div className="email">
              <input
                type="text"
                placeholder="Enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Update state with input value
              ></input>
            </div>
{/* 
            <div className="password">
              <input type="password" placeholder="Password" required></input>
            </div> */}

            <div className="sign-in-btn">
              <input type="submit" value="Sign in"></input>
            </div>

            <div className="forget">
              <div className="remember">
                <input type="checkbox"></input>
                <pre>Remember me</pre>
              </div>
              <div className="help">Need help?</div>
            </div>

            <div className="new-member">
              <p>
                New to Netflix? <a href="#">Sign up now</a>
              </p>
            </div>

            <div className="privacy">
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <a href="#">Learn more</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;