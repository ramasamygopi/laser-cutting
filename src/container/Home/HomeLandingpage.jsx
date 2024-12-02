import React from 'react';
import '../../assets/css/HomePage/HomeLanding.css';

export const HeroSection = () => {
  return (
    <>
    <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-container" style={{ backgroundImage: 'url(https://images.pexels.com/photos/7254419/pexels-photo-7254419.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
              <div className="carousel-overlay">
                <h1 className="headline">Precision Laser Cutting Services in Chennai</h1>
                <p className="subheadline">Delivering high-quality laser cutting solutions for all your metal and material needs across Tamil Nadu.</p>
                <button className="btn ">Get a Free Quote</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-container" style={{ backgroundImage: 'url(https://images.pexels.com/photos/7254419/pexels-photo-7254419.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
              <div className="carousel-overlay">
                <h1 className="headline">Laser Cutting Services for Metal and Materials</h1>
                <p className="subheadline">Our state-of-the-art laser cutting technology ensures precise cuts and high-quality finishes.</p>
                <button className="btn ">Learn More</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-container" style={{ backgroundImage: 'url(https://images.pexels.com/photos/7254419/pexels-photo-7254419.jpeg?auto=compress&cs=tinysrgb&w=600)' }}>
              <div className="carousel-overlay">
                <h1 className="headline">Expertise in Laser Cutting Solutions</h1>
                <p className="subheadline">Our team of experts has years of experience in providing high-quality laser cutting solutions.</p>
                <button className="btn">Get in Touch</button>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    
    </>
  );
};