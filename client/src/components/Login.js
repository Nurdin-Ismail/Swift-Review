import React, { useState } from "react";

function Login() {
  const [formInputs, setFormInputs] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false); 

  function handleChange(e) {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/users?username=${formInputs.username}&password=${formInputs.password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log(response)

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const userData = await response.json();

        // Check if the provided username and password match any user in the fetched data
        const userFound = userData.find(
          (user) =>
            user.username === formInputs.username &&
            user.password === formInputs.password
        );

        if (userFound) {
          // Store the token or user information in local storage
          localStorage.setItem("authToken", userFound.token); 

          // Update state to indicate successful login
          setLoginSuccess(true);
          console.log("login success")

          // Redirect to a different page or update the UI

        } else {
          setError("Invalid username or password");
        }
      } else {
        // Handle non-JSON response
        setError("Invalid response from the server");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      setError("Login failed. Please try again.");
    }
  }

  return (
    <div className="review_form sgn_pstn">
      <h3 className="text-center text-uppercase">Login</h3>
      <form className="form">
        <div className="form-floating mb-3">
          <input
            onChange={handleChange}
            value={formInputs.username}
            type="text"
            name="username"
            className="form-control"
            id="floatingInput"
            placeholder="Username"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            value={formInputs.password}
            type="password"
            name="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          className="btn btn-primary sgn_btn"
          onClick={handleSubmit}
          type="submit"
        >
          LOGIN
        </button>

        {error && <p className="error-message">{error}</p>}
        {loginSuccess && <p className="success-message">Login successful!</p>}
      </form>
    </div>
  );
}

export default Login;

