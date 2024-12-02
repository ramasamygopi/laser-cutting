import React from 'react';
import industriesData from '../../assets/data/industries.json';
import '../../assets/css/service/Industries.css'

const Industries = () => {
  return (
    <div className="industries-container">
      <h3>Industries We Serve:</h3>
      <div className="industries-grid">
        {industriesData.map((industry, index) => (
          <div className="industry-card" key={index}>
            <i className={industry.icon}></i>
            <h5>{industry.title}</h5>
            <p><i class="fas fa-quote-left" id="qutoes"></i>{industry.description}<i class="fas fa-quote-right" id="qutoes"></i>.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;