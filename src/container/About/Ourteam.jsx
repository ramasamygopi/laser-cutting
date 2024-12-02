import React from 'react';
import '../../assets/css/About/Ourteam.css';


export const Ourteam = () => {
  return (
    <>
    <div className="container-team-main">
    <div className="container-team">
        <h4>Working with our team</h4>
        <p>Engaging with precision laser technology means partnering with a dedicated team of experts in engineering, manufacturing, and logistics. Our professionals are committed to pioneering advancements and ensuring exceptional customer satisfaction. We strive to empower engineers and procurement teams throughout the entire product development lifecycle.</p>
    </div>
    <div className='team-box-container'>
        <div className="box1">
            <img src="https://images.prismic.io/geomiqstaging/ZvKV47VsGrYSv0ob_Frame1171275806.png" alt="achieve" />
            <h5>Achieve Excellence</h5>
            <p><i className="fa-solid fa-circle-check"></i>Continuous innovation</p>
            <p><i className="fa-solid fa-circle-check"></i>Industry leading service quality</p>
            <p> <i className="fa-solid fa-circle-check"></i>Is it good enough to be proud of?</p>
        </div>
        <div className="box1">
            <img src="https://images.prismic.io/geomiqstaging/ZvKWkrVsGrYSv0p2_puzzle.png" alt="achieve" />
            <h5>Integrity</h5>
            <p><i className="fa-solid fa-circle-check"></i>Be accountable</p>
            <p><i className="fa-solid fa-circle-check"></i>Be reliable</p>
            <p><i className="fa-solid fa-circle-check"></i>Be honest</p>
        </div>
        <div className="box1">
            <img src="https://images.prismic.io/geomiqstaging/ZvKWybVsGrYSv0p8_heart.png" alt="achieve" />
            <h5>We are all customers</h5>
            <p><i className="fa-solid fa-circle-check"></i>Make sure to understand</p>
            <p><i className="fa-solid fa-circle-check"></i>Don’t beat around the bush</p>
            <p><i className="fa-solid fa-circle-check"></i>Empathy and responsivness</p>
        </div>
        </div>    
    </div>
    <div className="out-team-img">
    <img  className="team-photo"src="https://images.prismic.io/geomiqstaging/Zu2EAbVsGrYSvoYq_MacBookPro14_-34.png" alt="team-img" />
    </div>
    </>
  )
}
