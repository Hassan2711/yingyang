import { useState, useEffect } from 'react';
import { slide1, slide2, slide3, left, right, aeroplane } from "../assets";
import "./Main.scss";

const Main = () => {
  const [activePanel, setActivePanel] = useState(1);

  const handlePrev = () => {
    setActivePanel(prev => (prev === 1 ? 3 : prev - 1));
  };

  const handleNext = () => {
    setActivePanel(prev => (prev === 3 ? 1 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleRadioChange = (panel) => {
    setActivePanel(panel);
  };

  const handleCustomRadioClick = (panel) => {
    setActivePanel(panel);
  };
  const handleScrollDown = (percentage) => {
    const totalDocumentHeight = document.documentElement.scrollHeight;
    const scrollPosition = (totalDocumentHeight * percentage) / 100;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
};

  return (
    <section className="homee" id="home">
      <div className="slide">
        <div className="heading">
          <h1>Create Ever-Lasting Memories With Us</h1>
        </div>
        <div className={`panel${activePanel}`}>
          {activePanel === 1 && <img src={slide1} alt="" />}
          {activePanel === 2 && <img src={slide2} alt="" />}
          {activePanel === 3 && <img src={slide3} alt="" />}
        </div>
        <div className="radio-buttons">
          <input
            type="radio"
            id="radio1"
            checked={activePanel === 1}
            onChange={() => handleRadioChange(1)}
          />
          <span
            className="radio-button"
            onClick={() => handleCustomRadioClick(1)} // Added click handler
          ></span>

          <input
            type="radio"
            id="radio2"
            checked={activePanel === 2}
            onChange={() => handleRadioChange(2)}
          />
          <span
            className="radio-button"
            onClick={() => handleCustomRadioClick(2)} // Added click handler
          ></span>

          <input
            type="radio"
            id="radio3"
            checked={activePanel === 3}
            onChange={() => handleRadioChange(3)}
          />
          <span
            className="radio-button"
            onClick={() => handleCustomRadioClick(3)} // Added click handler
          ></span>
        </div>
      </div>
      <button className="carousel-button prev" onClick={handlePrev}>
        <img src={left} alt="" />
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        <img src={right} alt="" />
      </button>
      <button className='book' onClick={() => handleScrollDown(15)}>Book Now</button>
      <div className="plane">
        <img src={aeroplane} alt="" />
      </div>
    </section>
  );
};

export default Main;
