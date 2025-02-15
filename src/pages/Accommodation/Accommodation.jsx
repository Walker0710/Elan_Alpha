import './Accommodation.css';

import map_img from '../../assets/Map/map.png';

import room_img_1 from '../../assets/RoomPhotos/unnamed.jpg';
import room_img_2 from '../../assets/RoomPhotos/unnamed1.jpg';

import BgCont from '../../components/BgCont/BgCont.jsx';

import faqs from '../../data/faqs.js';

function Accommodation() {
  return (
    <div className="Accommodation">
      <BgCont />
      <div className="Accommodation-Heading glow-heading">accommodation</div>
      <div className="Accommodation-Description">
        Planning to immerse yourself in the complete Elan & nVision experience? With 
        three action-packed days of festivities, we strongly recommend securing your 
        stay in advance. To ensure your comfort throughout the fest, we&apos;ve detailed 
        various accommodation options below. Early booking will help you focus on what 
        matters most - making unforgettable memories at our event. <br/><br/>
        <a href="https://docs.google.com/document/d/1e_QbfhDiW31fILSkyRMBcq419O8_oX6Xa-2O1UzygNY/edit?usp=drivesdk" target="_blank" rel="noreferrer" className="Accommodation-Booking-Link">Check out the accommodation guidelines here</a> <br/><br/>
        <a href="https://pages.razorpay.com/pl_Pt37mNvj2k0ByX/view" target="_blank" rel="noreferrer" className="Accommodation-Booking-Link">Book your rooms now</a> <br/><br/>
      </div>
      <div className="Accommodation-Map-Heading Accommodation-Heading glow-heading">room photos</div>
      <div className="Accommodation-Map-Container">
      <img src={room_img_1} alt="Map" className="Accommodation-Map" />
      <img src={room_img_2} alt="Map" className="Accommodation-Map" />
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
