import { useState } from 'react';
import { logo } from "../assets";
import { navLinks } from "../constants";
import './Navbar.scss';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (navTitle) => {
    setActiveLink(navTitle);
  };

  return (
    <nav>
      <div className='container'>
        <div className="imgNtitle">
          <div className="img">
            <img src={logo} alt="AirWays" />
          </div>
          <div className="title">
            <h1>YingYang AirWays</h1>
          </div>
        </div>
        <div className="linksNbtn">
          <div className="links">
            <ul>
              {navLinks.map((nav) => (
                <li key={nav.id} className={activeLink === nav.title ? 'active' : ''} onClick={() => handleLinkClick(nav.title)}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="btn">
            <button className="contact-button">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
