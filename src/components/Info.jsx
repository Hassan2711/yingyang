import { calendar, save, shield } from '../assets'
import { useInView } from 'react-intersection-observer';
import './Info.scss'

const Info = () => {
    const { ref: Ref, inView: InView } = useInView({
        threshold: 0.1,
      });
  return (
    <section className='info' ref={Ref}>
        <div className="container">
            <div className='s1'>
                <h2 className={`${InView ? 'animate' : ''}`}>Travel to make memories all across the globe</h2>
                <button className={`${InView ? 'animate' : ''}`}>View all</button>
            </div>
            <div className={`s2 ${InView ? 'animate' : ''}`}>
                <div className="c1">
                    <div className="img1">
                        <img src={calendar} alt="" />
                    </div>
                    <h4>Book & Relax</h4>
                    <div className="para">
                        <p className='p1'>You can also call airlines </p>
                        <p className='p2'>from your phone and </p>
                        <p className='p3'>book a flight ticket</p>
                    </div>
                  
                </div>
                <div className="c2">
                    <div className="img2">
                        <img src={shield} alt="" />
                    </div>
                    <h4>Smart Checklist</h4>
                    <div className="para">
                        <p className='p1'>You can also call airlines </p>
                        <p className='p2'>from your phone and </p>
                        <p className='p3'>book a flight ticket</p>
                    </div>
                </div>
                <div className="c3">
                    <div className="img3">
                        <img src={save} alt="" />
                    </div>
                    <h4>Save More</h4>
                    <div className="para">
                        <p className='p1'>You can also call airlines </p>
                        <p className='p2'>from your phone and </p>
                        <p className='p3'>book a flight ticket</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info