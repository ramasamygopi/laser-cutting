import React from 'react';
import '../../assets/css/About/AboutUsPage.css'
const aboutUsData = [
    {
      id: 1,
      title: 'Our Mission',
      icon: 'fas fa-bullseye',
      description: '“At IMAX Laser, we are committed to offering the highest standard of laser cutting services across Chennai and Tamil Nadu. With years of industry experience, we focus on providing precision and efficiency to meet all your project needs.”'
    },
    {
      id: 2,
      title: 'Our Story',
      icon: 'fas fa-book',
      description: '“Founded with the vision of revolutionizing the fabrication industry in Tamil Nadu, IMAX Laser has grown into a trusted partner for industries ranging from automotive to construction.”'
    },
    {
      id: 3,
      title: 'Our Team',
      icon: 'fas fa-users',
      description: '“Our team of experienced professionals ensures that every project is handled with care, using the latest technologies to meet even the most demanding requirements.”'
    },
    {
      id: 4,
      title: 'Our Technology',
      icon: 'fas fa-robot',
      description: '“A description of the advanced laser cutting machines used, emphasizing their precision, speed, and ability to handle a variety of materials and thicknesses.”'
    }
  ];

  
export const MissionComponent = () => {
  return (
    <div className="about-us-page">
         <h2>Our Values and Expertise</h2>
    <div className="cardds-container">
      {aboutUsData.map((section) => (
        <div key={section.id} className="carddd">
          <i className={section.icon}></i>
          <h3>{section.title}</h3>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  </div>
  );
};
