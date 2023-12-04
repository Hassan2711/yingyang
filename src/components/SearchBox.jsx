import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { calendar, passengers, location } from '../assets';
import './SearchBox.scss';

const SearchBox = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const { ref: hrRef, inView: hrInView } = useInView({
    threshold: 0.1,
  });

  return (
    <section id='search' className='search' ref={hrRef}>
      <hr/>
      <div className={`container ${hrInView ? 'animate' : ''}`}>
        <div className={`btns ${hrInView ? 'animate' : ''}`}>
          <button
            className={`economy ${activeLink === "economy" ? "active" : ""}`}
            onClick={() => handleLinkClick("economy")}
          >
            Economy
          </button>
          <button
            className={`business ${activeLink === "business" ? "active" : ""}`}
            onClick={() => handleLinkClick("business")}
          >
            Business Class
          </button>
          <button
            className={`first ${activeLink === "first" ? "active" : ""}`}
            onClick={() => handleLinkClick("first")}
          >
            First Class
          </button>
        </div>
        <div className={`details ${hrInView ? 'animate' : ''}`}>
          <div className="details-content">
              <div className="img">
                <img src={location} alt="pin" />
              </div>
              <div className="c2">
                <h2>Location</h2>
                <input type="text"placeholder='Desired Destination' />

              </div>
          </div>
          <div className="details-content">
              <div className="img">
                <img src={passengers} alt="passengers" />
              </div>
              <div className="c2">
                <h2>Travelers</h2>
                <input type="text"placeholder='# of guests' />
              </div>
          </div>
          <div className="details-content">
              <div className="img">
                <img src={calendar} alt="check-in" />
              </div>
              <div className="c2">
                <h2>Check-in</h2>
                <input type="text"placeholder='Check-in Date' />
              </div>
          </div>
          <div className="details-content">
              <div className="img">
                <img src={calendar} alt="check-out" />
              </div>
              <div className="c2">
                <h2>Check-out</h2>
                <input type="text"placeholder='Check-out Date' />
              </div>
          </div>
          <button className="search-btn">Search Flight</button>

        </div>
      </div>
    </section>
  );
};

export default SearchBox;
