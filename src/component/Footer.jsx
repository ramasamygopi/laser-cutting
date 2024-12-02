import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer/Footer.css';

export const Footer = () => {
  return (
    <div>
      <footer className="footer" id="footer">
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">    
              <div className="about-us-logo">
                <img src="http://www.precisionlaserwork.com/images/Logo_Reverse_397x92px.png" alt="Logo" style={{ width: 100, height: 20, marginRight: 10 }} />
              </div>
              <h4>About Us</h4>
              <p>
                At IMAX Laser, we are committed to offering the highest standard of laser cutting services across Chennai and Tamil Nadu.
              </p>
              <ul>
                <li>
                  <Link to="/about">Our Mission</Link>
                </li>
                <li>
                  <Link to="/about">Our Story</Link>
                </li>
                <li>
                  <Link to="/about">Our Team</Link>
                </li>
                <li>
                  <Link to="/about">Our Technology</Link>
                </li>
              </ul>
            </div>
           
            <div className=" col-md-4 col-sm-6 col-xs-12">
              <h4>Services</h4>
              <ul>
                <li>
                  <Link to="/services">Custom Laser Cutting</Link>
                </li>
                <li>
                  <Link to="/services">Metal Fabrication</Link>
                </li>
                <li>
                  <Link to="/services">Prototyping and Small Batch Production</Link>
                </li>
                <li>
                  <Link to="/services">Architectural and Decorative Cutting</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <h4>Contact Us</h4>
              <p>
                Get in touch with us to discuss your project or get a free quote!
              </p>
              <ul>
                <li>
                  <a href="tel:+91 1234567890">+91 1234567890</a>
                </li>
                <li>
                  <Link to='/contact'>info@precision.com</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Form</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <h4>Follow Us</h4>
              <div className="social-media">
                <a href="#" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-8 col-sm-6 col-xs-12">
              <h4>Blog</h4>
              <ul>
                <li>
                  <Link to="/blog">The Benefits of Laser Cutting for Industrial Applications</Link>
                </li>
                <li>
                  <Link to="/blog">Laser Cutting vs. Other Cutting Methods: Why Laser is Superior</Link>
                </li>
                <li>
                  <Link to="/blog">Innovative Uses for Laser Cutting in Interior Design</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
            <hr />
          <p>&copy; 2024 Gopi@webdeveplor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

