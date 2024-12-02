import React from "react";
import "../../assets/css/service/serviceLanding.css";

export const ServiceLanding = () => {
  return (
    <>
    <div className="ad">
      <section className="hero-section3">
        <div
          className="container-fluid"
          style={{
            backgroundImage:
              "url(https://media.gettyimages.com/id/1206070769/photo/portrait-of-an-employee-working-on-the-production-line.jpg?s=612x612&w=0&k=20&c=54nJgYmd3q36CQi1z5M2aoJxb_KjGEdgXIOWsOv9oqM=)",
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
              <h1 className="headline-about">Services</h1>
            </div>
          </div>
        </div>
        {/* <div className="home-service">
           <p>Home <span>services</span></p>
        </div> */}
      </section>
      </div>
    </>
  );
};
export default ServiceLanding;