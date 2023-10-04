import React from "react";

function ContactUs(){
    return (

    <div className="container">
      <h2 className="mt-5 mb-4">Contact Us</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
         <label htmlFor="phonenumber "className="form-label">
          Phone Number:
         </label>
         <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="form-control"
            required
         />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
      
export default ContactUs;