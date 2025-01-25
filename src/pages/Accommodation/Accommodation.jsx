import './Accommodation.css';

import map_img from '../../assets/Map/map.png';

import BgCont from '../../components/BgCont/BgCont.jsx';

import faqs from '../../data/faqs.js';

function Accommodation() {
  return (
    <div className="Accommodation">
      <BgCont />
      <div className="Accommodation-Heading glow-heading">accommodation</div>
      <div className="Accommodation-Description">
        Gazing up at the night sky, a canvas painted with celestial wonders. The Milky Way, a 
        shimmering river of stars, stretching across the heavens. Planets, distant worlds, 
        each with its own unique story. A cosmic symphony, a universe of infinite possibilities. 
        Gazing up at the night sky, a canvas painted with celestial wonders. The Milky Way, a 
        shimmering river of stars, stretching across the heavens. Planets, distant worlds, each 
        with its own unique story. A cosmic symphony, a universe of infinite possibilities.
      </div>
      <div className="Accommodation-Map-Heading Accommodation-Heading glow-heading">map</div>
      <div className="Accommodation-Map-Container">
        <img src={map_img} alt="Map" className="Accommodation-Map" />
      </div>
      <div className="Accommodation-Faqs-Heading Accommodation-Heading glow-heading">faqs</div>
      {
          faqs.map((faq, index) => (
            <div className='Accommodation-Faqs-Container' key={index}>
              <div className='Accommodation-Faqs-Top'>
                <div className='Accommodation-Faqs-question'>
                  {faq.question}
                </div>
              </div>
              <div className='Accommodation-Faqs-Answer'>
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

export default Accommodation;
