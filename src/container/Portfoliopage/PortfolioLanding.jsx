import React from 'react';
import '../../assets/css/About/About.css';

 const PortfolioLanding = () => {
  return (
    <section className="hero-section2">
    <div
      className="container-fluid"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7254419/pexels-photo-7254419.jpeg?auto=compress&cs=tinysrgb&w=600)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="headline-about">Portfolio Page</h1>
        </div>
      </div>
    </div>
  </section>
  )
}

export default PortfolioLanding;
