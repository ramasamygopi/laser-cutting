import React from 'react';
import '../../assets/css/About/AboutVideo.css';

export const AboutVideo = () => {
  return (
    <div className="desktop-margin-wrapper">
      <div className="container-about-vi">
        <div className="ro" >
          <div className="col-md-6 col-lg-6 col-xl-6 gap">
            <div className="iframe-container">
              <iframe
                src="https://www.youtube.com/embed/T-YfS29bzd0"
                title="Precision Laser Cutting Solutions"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                width="488"
                height="245"
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-6 custom-class">
            <h2>High on Precision Higher on Productivity</h2>
            <p>
              Precision Laser Cutting Solutions offers state-of-the-art custom metal and pipe cutting solutions for its customers. Based in South Mumbai, our latest imported technology and infrastructure is able to cut all types of alloys, including steel, stainless steel, brass, copper, aluminium, and other metals. Our machines are capable of making fast, clean, beautiful metal cuts in thickness ranging from 0.5mm to as far as 20mm.
            </p>
            <button>ABOUT PLCS</button>
          </div>
        </div>
      </div>
    </div>
  );
};