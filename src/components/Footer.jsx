import { logo, fb, x, insta, linkedin } from '../assets'
import './Footer.scss'

const Footer = () => {
  return (
    <section className="footer">
        <div className="container">
            <div className="s1">
                <h2>Subscribe Newsletters & get Latest News  </h2>
                <div className="sub-bar">
                    <input type="text" placeholder='Enter Your Email' />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="s2">
                <div className="box1">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="text">
                         <p>Your mind should be stronger than your feelings. Fly!</p>
                    </div>
                    <div className="links">
                    <div className="link">
                        <img src={fb} alt="" />
                    </div>
                    <div className="link">
                        <img src={x} alt="" />
                    </div>
                    <div className="link">
                        <img src={insta} alt="" />
                    </div>
                    <div className="link">
                        <img src={linkedin} alt="" />
                    </div>
                    </div>
                </div>
                <div className="box2">
                    <div className="head">
                        <h3>Information</h3>
                    </div>
                    <div className="links">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Explore</a></li>
                            <li><a href="#">Flight Status</a></li>
                            <li><a href="#">Travel</a></li>
                            <li><a href="#">Check-in</a></li>
                            <li><a href="#">Manage your booking</a></li>
                        </ul>
                    </div>
                </div>
                <div className="box3"><div className="head">
                        <h3>Quick Guide</h3>
                    </div>
                    <div className="links">
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">How to</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Baggage</a></li>
                            <li><a href="#">Route Map</a></li>
                            <li><a href="#">Our communities</a></li>
                        </ul>
                    </div>
                </div>
                <div className="box4">
                <div className="head">
                        <h3>About us</h3>
                    </div>
                    <div className="links">
                        <ul>
                            <li><a href="#">Chauffer</a></li>
                            <li><a href="#">Our partners</a></li>
                            <li><a href="#">Destination</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Transportation</a></li>
                            <li><a href="#">Programme rules</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer