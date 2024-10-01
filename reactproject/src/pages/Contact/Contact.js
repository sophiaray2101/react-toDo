import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./Contact.css"

function Contact() {
  return (
    <div>
        <Navbar />
        <div className='contact-container'>
          <h2 className='contact-title'>Fill Out this Form to Contact Us!</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments:</label>
              <textarea
                id="comments"
                name="comments"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Contact;