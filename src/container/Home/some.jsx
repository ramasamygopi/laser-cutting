import React, { useState, useEffect } from 'react';
import '../../assets/css/HomePage/KeyService.css';
import servicesData from '../../assets/data/services.json';

export const Some = () => {
  const [showCards, setShowCards] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 500) {
      setShowCards(true);
    }
  }, [scrollPosition]);

  return (

    <>
      <section className="key-services py-5">
        <div className="container">
          <h2 className="title text-center mb-4">Our Laser Cutting Expertise</h2>
        
          <div className="row">
            {servicesData.services.map((service, index) => (
              <div key={index} className="col-md-5 col-lg-4 col-sm-12 col-xs-12 mb-4 ">
                <div className={`card h-100 ${showCards ? 'show' : ''}`}>
                  <img src={service.image} alt={service.title} className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-title">{service.title}</h4>
                    <p className="card-text">{service.description}.</p>
                    <button className="learn-more">{service.buttonText} <i className="fas fa-arrow-right ml-2"></i></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}