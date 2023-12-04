
import { bahamas, mosque, paris, dubai, person1, person2, person3, person4 } from "../assets";
import "./Travelers.scss";

const Travelers = () => {
  return (
    <section className="travelers">
      <div className="container">
        <div className="title">
          <h2>Top travelers of the month!</h2>
        </div>
        <div className="s2">
        <div className="users">
          <div className="user-container">
            <div className="bahamas">
              <img src={bahamas} alt="bahamas" />
              <div className="user">
                 <img src={person1} alt="" />
              </div>
              <div className="user-detail">
                <h4>Emma</h4>
                <h5>@emmatravels</h5>
              </div>
            </div>
          </div>
          <div className="user-container">
            <div className="mosque">
              <img src={mosque} alt="mosque" />
              <div className="user">
                <img src={person2} alt="" />
              </div>
              <div className="user-detail">
                <h4>Haider</h4>
                <h5>@H.weather</h5>
              </div>
            </div>
          </div>
          <div className="user-container">
            <div className="paris">
              <img src={paris} alt="paris" />
              <div className="user">
                <img src={person3} alt="" />
              </div>
              <div className="user-detail">
                <h4>Juliet</h4>
                <h5>@looking4romeo</h5>
              </div>
            </div>
          </div>
          <div className="user-container">
            <div className="dubai">
              <img src={dubai} alt="dubai" />
              <div className="user">
                <img src={person4} alt="" />
              </div>
              <div className="user-detail">
                <h4>Jennifer</h4>
                <h5>@jen.doffer</h5>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Travelers;
