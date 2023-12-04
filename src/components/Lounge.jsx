import { lounge1, lounge2 } from "../assets"
import { useInView } from 'react-intersection-observer';
import "./Lounge.scss"

const Lounge = () => {
    const { ref: Ref, inView: InView } = useInView({
        threshold: 0.1,
      });
  return (
    <section className="lounge" ref={Ref}>
        <div className="container">
            <div className="s1">
                <h2 className={`${InView ? 'animate' : ''}`}>Unaccompanied Minor Lounge</h2>
                <div className="main-box">
                    <div className={`top-box ${InView ? 'animate' : ''}`}>
                        <div className="topleft">
                            <h4>Help throughout the airport</h4>
                            <p>You can also call airlines from yout phone and book a flight ticket to one of your favorite desinations!</p>
                        </div>
                        <div className="topright">
                            <h4>Priority boarding</h4>
                            <p>You can also call airlines from yout phone and book a flight ticket to one of your favorite desinations!</p>
                        </div>
                    </div>
                    <div className={`bottom-box ${InView ? 'animate' : ''}`}>
                        <div className="bottomleft">
                            <h4>Care on the flight</h4>
                            <p>You can also call airlines from yout phone and book a flight ticket to one of your favorite desinations!</p>
                        </div>
                        <div className="bottomright">
                            <h4>Care on the flight</h4>
                            <p>You can also call airlines from yout phone and book a flight ticket to one of your favorite desinations!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="s2">
                <div className={`lounges ${InView ? 'animate' : ''}`}>
                   <div className="lounge1">
                      <img src={lounge1} alt="" />
                   </div>
                    <div className="lounge2">
                      <img src={lounge2} alt="" />
                    </div>
                </div>
               
            </div>
        </div>
    </section>
  )
}

export default Lounge