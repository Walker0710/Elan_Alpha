import './Sponsors.css';

import {
  title,
  environment_management,
  ticketing,
  corporate,
  techinical,
  social_welfare,
  mobile_gaming,
  merchandise,
  power,
  digital_banking,
  official_community,
  anime_title_sponsor,
  banking,
  exclusive_adventure,
  style,
  savings,
  logistics,
  self_care,
  brand,
  oral_care,
  travel,
  school_education,
  audio,
  food,
  event,
  refreshment,
  sustainability,
  fest_workshop,
  wooden_games,
  special_thanks

} from '../../data/sponsors.js';

import BgCont from '../../components/BgCont/BgCont';

function Sponsors() {
  return (
    <div className="Sponsors">
      <BgCont />
      <div className="Sponsors-Heading glow-heading">our sponsors</div>

      <div className="Sponsors-Member-Headings">title sponsors</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          title.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target="_blank">
                <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Boxes-Container">
      {
          corporate.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target="_blank">

              <img src={person.image} className='Sponsors-Member-Img'></img>
              </a>
              <div className="Sponsors-Member-Type">corporate Partner</div>
            </div>
          ))
        }
        {
          techinical.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target="_blank">

              <img src={person.image} className='Sponsors-Member-Img'></img>
              </a>
              <div className="Sponsors-Member-Type">Techinical Partner</div>
            </div>
          ))
        }
        {
          social_welfare.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target="_blank">
                <img src={person.image} className='Sponsors-Member-Img'></img>
              </a>
              <div className="Sponsors-Member-Type">Social Welfare Partner</div>
              
            </div>
          ))
        }
        {
          ticketing.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target="_blank">
                <img src={person.image} className='Sponsors-Member-Img'></img>
              </a>
              <div className="Sponsors-Member-Type">Ticketing Welfare Partner</div>
            </div>
          ))
        }
        {
          environment_management.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target="_blank">
                <img src={person.image} className='Sponsors-Member-Img'></img>
              </a>
              <div className="Sponsors-Member-Type">Environment Management Partner</div>
            </div>
          ))
        }
        {
          power.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target="_blank">
                <img src={person.image} className='Sponsors-Member-Img'></img>
              </a>
              <div className="Sponsors-Member-Type">Power Partner</div>
            </div>
          ))
        }
        {
          digital_banking.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target="_blank">
                <img src={person.image} className='Sponsors-Member-Img'></img>
              </a>
              <div className="Sponsors-Member-Type">Digital Banking Partner</div>
            </div>
          ))
        }
        {
          official_community.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target="_blank">
                <img src={person.image} className='Sponsors-Member-Img'></img>
              </a>
              <div className="Sponsors-Member-Type">Official Community Partner</div>
            </div>
          ))
        }
        {
          anime_title_sponsor.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">Title sponsor for Anime quiz</div>
            </div>
          ))
        }
        {
          savings.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">Savings Partner</div>
            </div>
          ))
        }
        {
          travel.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">Travel Partner</div>
            </div>
          ))
        }
        {
          mobile_gaming.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">Mobile Gaming Partner</div>
            </div>
          ))
        }
        {
          style.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">Style Partner</div>
            </div>
          ))
        }
        {
          exclusive_adventure.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">Exclusive Adventure Partner</div>
            </div>
          ))
        }
        {
          logistics.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">Logistics Partner</div>
            </div>
          ))
        }
        {
          self_care.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">Self care Partner</div>
            </div>
          ))
        }
        {
          fest_workshop.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">Fest workshop Partner</div>
            </div>
          ))
        }
        {
          banking.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">banking Partner</div>
            </div>
          ))
        }
        {
          merchandise.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">merchandise Partner</div>
            </div>
          ))
        }
        {
          brand.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">brand Partner</div>
            </div>
          ))
        }
        {
          refreshment.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">refreshment Partner</div>
            </div>
          ))
        }
        {
          sustainability.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">sustainability Partner</div>
            </div>
          ))
        }
        {
          event.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">event Partner</div>
            </div>
          ))
        }
        {
          school_education.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">school education Partner</div>
            </div>
          ))
        }
        {
          food.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">food Partner</div>
            </div>
          ))
        }
        {
          audio.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">audio Partner</div>
            </div>
          ))
        }
        {
          wooden_games.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">wooden games Partner</div>
            </div>
          ))
        }
        {
          oral_care.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <a href={person.link} target='_Blank'>
              <img src={person.image} className='Sponsors-Member-Img'></img>

              </a>
              <div className="Sponsors-Member-Type">oral care Partner</div>
            </div>
          ))
        }
        {
          special_thanks.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
            </div>
          ))
        }
      </div>


    </div>
  );
}

export default Sponsors;
