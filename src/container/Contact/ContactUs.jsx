import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/contact/ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    } else if (name.length < 5) {
      errors.name = 'Name must be at least 5 characters';
    } else if (/\d/.test(name)) {
      errors.name = 'Name cannot contain numbers';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (phone.length !== 10) {
      errors.phone = 'Phone number must be 10 digits';
    } else if (isNaN(phone)) {
      errors.phone = 'Phone number must be a number';
    }
    if (!message) {
      errors.message = 'Message is required';
    } else if (message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      toast.success('Form submitted successfully!');
      resetForm();
    } else {
      toast.error('Please fix the errors in the form');
    }
  };
  return (
    <div className="contact-us-page">
      <div className="container ">
        <div className="row">
          <div className="col-md-4  get-in-touch">
            <h4>Get in Touch with IMAX Laser</h4>
            <p>We'd love to hear from you!</p>
            <ul>
              <li><i className="fa fa-phone" /> +91 1234567890</li>
              <li><i className="fa fa-envelope" /> info@precision.com <br/>(mailto:info@precision.com)</li>
              <li><i className="fa fa-map-marker" /> 123 Main St,Chennai,TamilNadu</li>
            </ul>
            <p> “Contact us today to discuss your project or get a free
            quote!"</p>
          </div>
          <div className="col-md-6  contact-form">
            <h2 className="text-center">Contact Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label><i className="fa fa-user" /> Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your name"
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label><i className="fa fa-envelope" /> Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label><i className="fa fa-phone" /> Phone:</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <div className="error">{errors.phone}</div>}
              </div>
              <div className="form-group">
                <label><i className="fa fa-comment" /> Message:</label>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Enter your message"
                />
                {errors.message && <div className="error">{errors.message}</div>}
              </div>
              <button className="d-block mx-auto" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};
export default ContactUs;