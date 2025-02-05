import './CultiCompetitions.css';

import BgCont from '../../components/BgCont/BgCont';

import cultural_competitions from '../../data/competition_cultural.js';

import PentagonLink from '../../components/PentagonLink/PentagonLink.jsx';

function CultiCompetitions() {
  return (
    <div className="CultiCompetitions">
      <BgCont />
      <div className="CultiCompetitions-Heading glow-heading">culti competitions</div>
      <div className="CultiCompetitions-Description">
        Welcome to the Culti Competitions,  where diversity and creativity intersect in a series 
        of dynamic events. These competitions showcase  the rich cultural tapestry and diverse 
        talents of our community. Join us  as we celebrate heritage, passion, and artistic 
        excellence through engaging competitions highlighting our participants&apos; unique contributions.
      </div>

      <div className="CultiCompetitions-Heading glow-heading">registration</div>

      <div className="CultiCompetitions-Boxes-container">
      {cultural_competitions.map((competition, index) => (
        <div className="CultiCompetitions-Box" key={index}>
        <div className="CultiCompetitions-Box-Title-Container">
          <div className="CultiCompetitions-Box-Title">
            {competition.name}
          </div>
          
          </div>
        <div className="CultiCompetitions-Box-Description-Container">
          <div className="CultiCompetitions-Box-Description">
            {competition.description}
          </div>
          <div className="CultiCompetitions-box-description-Register">
            {
              // <a href={competition.link} target="_blank" rel="noreferrer">Register here</a>
            }
            <PentagonLink
                              href={competition.link}
                              target="_blank"
                              text="Register here"
                              className="CultiCompetitions-box-description-Link"
                              fontSize={"1vw"}
                            />
          </div>

        </div>
        <div className="CultiCompetitions-Box-Image">
          <img src={competition.image}/>
        </div>
      </div>
      ))}



  
      </div>



    </div>
  );
}

export default CultiCompetitions;
