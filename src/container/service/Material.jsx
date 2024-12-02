import React from 'react';
import '../../assets/css/service/Material.css';
import materialsData from '../../assets/data/materiasl.json';

const Materials = () => {
  return (
    <>
      <div className="heading-material">
        <h3>Materials We Work With</h3>
        <p>At IMAX Laser, we handle a wide range of materials including</p>
      </div>
      <div className="materials-container">
        {materialsData.materials.map ((material, index) => (
          <div key={index} className="card-mat">
            <div className="icon-container">
              <i className={material.icon}></i>
            </div>
            <div className="card-contentt">
              <h5>{material.title}</h5>
              <div className="metal-split">
                {material.items.slice(0, 2).map((item, index) => (
                  <p key={index}>
                    <i className={item.icon}></i>
                    {item.name}
                  </p>
                ))}
              </div>
              <div className="metal-split">
                {material.items.slice(2).map((item, index) => (
                  <p key={index}>
                    <i className={item.icon}></i>
                    {item.name}
                  </p>
                ))}
              </div>
              <p className="see-more">Learn more <i className="fa-solid fa-arrow-right"></i></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Materials;