import './Sponsors.css';

import {
  title,
  environment_management,
  ticketing,
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
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Technical Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          techinical.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>

      <div className="Sponsors-Member-Headings">Social Welfare Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          social_welfare.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>

      <div className="Sponsors-Member-Headings">Ticketing Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          ticketing.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Environment Management Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          environment_management.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Power Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          power.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>

      
      <div className="Sponsors-Member-Headings">Digital Banking Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          digital_banking.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Official Community Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          official_community.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Title Sponsor of Anime Quiz</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          anime_title_sponsor.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Savings Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          savings.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Travel Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          travel.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Mobile Gaming Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          mobile_gaming.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Style Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          style.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Exclusive Adventure Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          exclusive_adventure.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>

      
      <div className="Sponsors-Member-Headings">Logistics Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          logistics.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Self-care Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          self_care.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>

      
      <div className="Sponsors-Member-Headings">Fest Workshop Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          fest_workshop.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Banking Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          banking.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Merchandise Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          merchandise.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Brand Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          brand.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Event Partner </div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          event.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">School Education Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          school_education.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Food Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          food.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Audio Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          audio.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Wooden Games Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          wooden_games.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Oral Care Partner</div>
      <div className="Sponsors-Member-Boxes-Container">
        {
          oral_care.map((person, index) => (
            <div className="Sponsors-Member-Box" key={index}>
              <img src={person.image} className='Sponsors-Member-Img'></img>
              
            </div>
          ))
        }
      </div>


      <div className="Sponsors-Member-Headings">Special thanks to</div>
      <div className="Sponsors-Member-Boxes-Container">
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
