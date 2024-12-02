import React, { useState } from 'react';
import '../../assets/css/FAQ/Faq.css';
import faqData from '../../assets/data/Faqdata.json'

const FaqContent = () => {
  const [showAnswer, setShowAnswer] = useState({});
  const [arrowRotation, setArrowRotation] = useState({}); // Add this line

  const handleToggleAnswer = (id) => {
    setShowAnswer((prevShowAnswer) => ({
      ...prevShowAnswer,
      [id]: !prevShowAnswer[id],
    }));
    setArrowRotation((prevArrowRotation) => ({ 
      ...prevArrowRotation,
      [id]: !prevArrowRotation[id],
    }));
  };
  return (
    <>
    <div className='faq-head'>
      <h5>Frequently Asked Questions</h5>
    </div>
      {faqData.map((faq, index) => (
        <div className='main-container'>
        <div key={faq.id} className="question-container">
          <div className="question">
            <p>
              <span className='numbers'>{`0${index + 1}`}</span>
              {faq.question}
            </p>
            <p
              className={`arrow-container ${arrowRotation[faq.id] ? 'rotate' : ''}`}
              onClick={() => handleToggleAnswer(faq.id)}
            >
              {showAnswer[faq.id] ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </p>
          </div>
          {showAnswer[faq.id] && (
            <p className="answer">{faq.answer}</p>
          )}
        </div>
        </div>
      ))}
    </>
  );
};

export default FaqContent;