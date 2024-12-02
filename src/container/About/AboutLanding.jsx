import React from "react";
import "../../assets/css/About/About.css";
export const AboutLanding = () => {
  return (
    <>
      <section className="hero-section2">
        <div
          className="container-fluid"
          style={{
            backgroundImage:
              "url(https://media.gettyimages.com/id/184609027/photo/cutting-metal-with-plasma-laser.jpg?s=612x612&w=0&k=20&c=5Ck89t9CPMilb2QTXxsbeGVYkWOqrTWQf2xpT7SBPQ4=)",
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
              <h1 className="headline-about">About Us</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
