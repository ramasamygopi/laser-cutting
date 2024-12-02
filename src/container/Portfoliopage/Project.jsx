import React from 'react';
import '../../assets/Portfolio/project.css';

const Project = ({ image, description, title }) => {
  return (
    <div className="project">
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const PastProject = () => {
  const projects = [
    {
      image: 'https://img.freepik.com/free-photo/high-angle-medical-scalpel-blades-tray_23-2149299221.jpg?ga=GA1.1.1564615343.1697263338&semt=ais_hybrid-rr-similar',
      description: 'We created a custom stainless steel logo for a tech startup using precision laser cutting techniques. The logo features intricate details and a mirror finish, showcasing our ability to work with metal and create high-quality branding solutions.',
      title: 'Custom Stainless Steel Logo for Tech Startup',
    },
    {
      image: 'https://img.freepik.com/free-vector/realistic-3d-jewelry-showcase-podium_52683-69876.jpg?ga=GA1.1.1564615343.1697263338&semt=ais_hybrid-rr-similar',
      description: 'This project showcases our ability to create elegant and sophisticated designs using precision laser cutting techniques. We created a laser cut acrylic display for luxury jewelry, featuring intricate details and a sleek finish.',
      title: 'Laser Cut Acrylic Display for Luxury Jewelry',
    },
    {
      image: 'https://img.freepik.com/free-photo/closeup-clock-face-with-cozy-room_91128-4217.jpg?ga=GA1.1.1564615343.1697263338&semt=ais_hybrid-rr-similar',
      description: 'We created an intricate wooden clock for home decor using precision laser cutting techniques. The clock features complex designs and a natural wood finish, demonstrating our attention to detail and precision cutting capabilities.',
      title: 'Intricate Wooden Clock for Home Decor',
    },
    {
      image: 'https://img.freepik.com/free-photo/measuring-cells_1098-16265.jpg?ga=GA1.1.1564615343.1697263338&semt=ais_hybrid-rr-similar',
      description: 'This project showcases our ability to create large-scale and complex designs using precision laser cutting techniques. We created a custom laser cut metal art piece for an outdoor installation, featuring intricate details and a durable finish.',
      title: 'Custom Laser Cut Metal Art for Outdoor Installation',
    },
    {
      image: 'https://img.freepik.com/free-photo/ouija-board-planchette-old-book-top-view_23-2149409520.jpg?ga=GA1.1.1564615343.1697263338&semt=ais_hybrid-rr-similar',
      description: 'We created laser cut wooden coasters with custom designs using precision laser cutting techniques. The coasters feature intricate details and a natural wood finish, demonstrating our ability to create unique and functional products.',
      title: 'Laser Cut Wooden Coasters with Custom Designs',
    },
    {
      image: 'https://img.freepik.com/free-photo/industry-machinery-works-with-accuracy-skill-generated-by-ai_188544-19558.jpg?ga=GA1.1.1564615343.1697263338&semt=ais_hybrid-rr-similar',
      description: 'This project showcases our ability to create precise and accurate designs using precision laser cutting techniques. We created precision laser cut stencils for industrial applications, featuring intricate details and a durable finish.',
      title: 'Precision Laser Cut Stencils for Industrial Applications',
    },
    {
      image: 'https://img.freepik.com/free-photo/front-counter-coffe-shop-cafe_1150-12214.jpg?ga=GA1.1.1564615343.1697263338&semt=ais_hybrid-rr-similar',
      description: 'We created custom laser cut wooden signs for restaurant branding using precision laser cutting techniques. The signs feature intricate designs and a natural wood finish, demonstrating our ability to create high-quality signage solutions.',
      title: 'Custom Laser Cut Wooden Signs for Restaurant Branding',
    },
    {
      image: 'https://img.freepik.com/free-photo/ornate-lantern-illuminating-old-fashioned-mosaic-design-generated-by-ai_188544-19651.jpg?ga=GA1.1.1564615343.1697263338&semt=ais_hybrid-rr-similar',
      description: 'This project showcases our ability to create functional and elegant designs using precision laser cutting techniques. We created laser cut acrylic brochure holders for trade shows, featuring intricate details and a sleek finish.',
      title: 'Laser Cut Acrylic Brochure Holders for Trade Shows',
    },
    {
      image: 'https://img.freepik.com/free-photo/3d-rendering-abstract-black-white-background_23-2150913881.jpg?ga=GA1.1.1564615343.1697263338&semt=ais_hybrid-rr-similar',
      description: 'We created an intricate metal grille for an architectural feature using precision laser cutting techniques. The grille features complex designs and a durable finish, demonstrating our ability to create high-quality architectural solutions.',
      title: 'Intricate Metal Grille for Architectural Feature',
    },
  ];
  return (
    <div className="projects-main-container">
    <div className="projects">
      <h2>Our Past Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default PastProject;