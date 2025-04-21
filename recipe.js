import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ContactUs.css';
import image from '../assets/images/image.png';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'your_service_id',       // replace with your EmailJS service ID
      'your_template_id',      // replace with your EmailJS template ID
      formData,
      'your_public_key'        // replace with your EmailJS public key
    )
    .then((result) => {
        console.log(result.text);
        setStatus('Data sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
    }, (error) => {
        console.log(error.text);
        setStatus('Failed to send data. Please try again.');
    });
  };

  return (
    <div className="contactus-container">
      <div className="contactus-form">
        <h1>Request A Call Back</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" value={formData.name} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" className="form-control" value={formData.phone} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="form-control" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
        {status && <p style={{ marginTop: '10px', color: 'green' }}>{status}</p>}
      </div>
      <div className="contactus-image">
        <img src={image} alt="Delicious food" />
      </div>
    </div>
  );
}

export default ContactUs;
