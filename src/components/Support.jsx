import './Support.scss'
import { useInView } from 'react-intersection-observer';
import { plane1, plane2, plane3 } from '../assets';

const Support = () => {
    const { ref: Ref, inView: InView } = useInView({
        threshold: 0.1,
      });
  return (
    <section className='support' ref={Ref}>
        <h4>TRAVEL SUPPORT</h4>
        <h3>Plan your travels with confidence</h3>
        <p>Find help with booking and travel plans. See what to expect along the journey!</p>
        <div className={`container ${InView ? 'animate' : ''}`}>
            <div className="text">
                <div className="blue">1</div>
                    <h3>Travel across the World</h3>
                    <p>Find help with booking and travel plans. See what to expect along the journey!</p>
                <div className="orange">2</div>
                    <h3>Chauffeur services at your arrival</h3>
                    <p>Find help with booking and travel plans. See what to expect along the journey!</p>
                <div className="peach">3</div>
                    <h3>Multi-risk travel insurance</h3>
                    <p>Find help with booking and travel plans. See what to expect along the journey!</p>
            </div>
            <div className="img">
                <div className="plane1">
                    <img src={plane1} alt="plane1" />
                </div>
                <div className="plane2">
                    <img src={plane2} alt="plane2" />
                </div>
                <div className="plane3">
                    <img src={plane3} alt="plane3" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Support