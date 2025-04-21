import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ContactUs.css';
import image from '../assets/images/image.png'

function ContactUs() {
  return (
    <div className="contactus-container">
      <div className="contactus-form">
        <h1>Request A Call Back</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-control"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
      <div className="contactus-image">
        <img src={image} alt="Delicious food" />
        {/* Replace path_to_image.jpg with actual image path */}
      </div>
    </div>
  );
}

export default ContactUs;
