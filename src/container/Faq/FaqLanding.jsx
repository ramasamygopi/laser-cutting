import React from 'react';
import '../../assets/css/About/About.css';

 const FaqLanding = () => {
  return (
    <section className="hero-section2">
    <div
      className="container-fluid"
      style={{
        backgroundImage:
          "url(https://media.gettyimages.com/id/1695357478/photo/high-school-students-watching-laser-engraving-and-cutting-machine.jpg?s=612x612&w=0&k=20&c=8hJLwZPfjAKBawj2SJvlCflPMoUfEILHoFeZWPcJM8Y=)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="headline-about">FAQ Page</h1>
        </div>
      </div>
    </div>
  </section>
  )
}
export default FaqLanding;
