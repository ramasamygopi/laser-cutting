import React from 'react';
import '../../assets/css/service/LaserCutting.css';
import data from '../../assets/data/Lasercuttingdata.json';
const LaserCutting = () => {
  return (
    <>
      <div className="service-container">
        <h3>{data.service.title}</h3>
        <p>"{data.service.description}".</p>
      </div>
      <div className='core-container-heading'>
        <h3>Our Core Services</h3>
      </div>
      <div className='Core-service-container'>
        <div className='img-core-conatiner'>
          <img src={data.coreServices[0].image} alt="core-service" />
        </div>
        <div className='core-service-content-container'>
          {data.coreServices[0].services.map((service, index) => (
            <div key={index} className='core-service'>
              <h5 className='heading-core-service'>
                <i className="fa-solid fa-circle-check"></i>
                {service.title}
              </h5>
              <p>{service.description}.</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LaserCutting;