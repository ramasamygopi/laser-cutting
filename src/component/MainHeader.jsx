import React from 'react';
import '../assets/css/Header/Header.css';
import{Link} from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top" id="header">
        <div className="container-fluid">
          <a className="navbar-brand ml-20" href="">
            <img src="http://www.precisionlaserwork.com/images/Logo_Reverse_397x92px.png" alt="Logo" style={{ width: 200, height: 40, marginRight: 10 }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" id="toggle-con">
            <span className="navbar-toggler-icon " id="toggle-btn"><i class="fa-solid fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav justify-content-space-around">
              <li className="nav-item mx-4">
               <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item mx-4">
                <Link to="/about" className="nav-link ">AboutUs</Link>
              </li>
              <li className="nav-item mx-4">
              <Link to="/services" className="nav-link ">Services</Link>
              </li>
              <li className="nav-item mx-4">
              <Link to="/portfolio" className="nav-link ">Portfolio</Link> 
              </li>
              <li className="nav-item mx-4">
              <Link to="/faqpage" className="nav-link ">FAQ-Page</Link>
              </li>
              <li className="nav-item mx-4">
              <Link to="/contact" className="nav-link ">Contact</Link>
              </li>
              <li className="nav-item mx-4">
              <Link to="/blog" className="nav-link ">Blog</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};