import './Accomodation.css';

import map_img from '../../assets/Map/map.png';

import BgCont from '../../components/BgCont/BgCont';

import faqs from '../../data/faqs.js';

function Accomodation() {
  return (
    <div className="Accomodation">
      <BgCont />
      <div className="Accomodation-Heading glow-heading">accomodation</div>
      <div className="Accomodation-Description">
        Gazing up at the night sky, a canvas painted with celestial wonders. The Milky Way, a 
        shimmering river of stars, stretching across the heavens. Planets, distant worlds, 
        each with its own unique story. A cosmic symphony, a universe of infinite possibilities. 
        Gazing up at the night sky, a canvas painted with celestial wonders. The Milky Way, a 
        shimmering river of stars, stretching across the heavens. Planets, distant worlds, each 
        with its own unique story. A cosmic symphony, a universe of infinite possibilities.
      </div>
      <div className="Accomodation-Map-Heading Accomodation-Heading glow-heading">map</div>
      <div className="Accomodation-Map-Container">
        <img src={map_img} alt="Map" className="Accomodation-Map" />
      </div>
      <div className="Accomodation-Faqs-Heading Accomodation-Heading glow-heading">faqs</div>
      {
          faqs.map((faq, index) => (
            <div className='Accomodation-Faqs-Container' key={index}>
              <div className='Accomodation-Faqs-Top'>
                <div className='Accomodation-Faqs-question'>
                  {faq.question}
                </div>
              </div>
              <div className='Accomodation-Faqs-Answer'>
                {faq.answer.split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))
        }
    </div>
  );
}

export default Accomodation;
