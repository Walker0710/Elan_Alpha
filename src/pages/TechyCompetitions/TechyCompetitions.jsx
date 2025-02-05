import './TechyCompetitions.css'

import BgCont from '../../components/BgCont/BgCont';

import tech_competitions from '../../data/competition_tech.js';

import PentagonLink from '../../components/PentagonLink/PentagonLink.jsx';

function TechyCompetitions() {
  return (
    <div className="TechyCompetitions">
      <BgCont />
      <div className="TechyCompetitions-Heading glow-heading">Techy competitions</div>
      <div className="TechyCompetitions-Description">
      Prepare to push the boundaries  of your skills and creativity as you dive into a diverse 
      array of challenges. From rapid-fire coding battles and cryptographic puzzles to game 
      development sprints and drone engineering, these contests will test your problem-solving 
      prowess, technical expertise, and ability to think outside the box.<br/><br/>

      Get ready  to collaborate, compete, and create as you tackle real-world problems and 
      explore  the frontiers of technology. Choose your arena and let the innovation begin!
      </div>

      <div className="TechyCompetitions-Heading glow-heading">registration</div>

      <div className="TechyCompetitions-Boxes-container">
      {tech_competitions.map((competition, index) => (
        <div className="TechyCompetitions-Box" key={index}>
        <div className="TechyCompetitions-Box-Title-Container">
          <div className="TechyCompetitions-Box-Title">
            {competition.name}
          </div>
          
          </div>
        <div className="TechyCompetitions-Box-Description-Container">
          <div className="TechyCompetitions-Box-Description">
            {competition.description}
          </div>
          <div className="TechyCompetitions-box-description-Register">
            {
              // <a href={competition.link} target="_blank" rel="noreferrer">Register here</a>
            }
            <PentagonLink
                                          href={competition.link}
                                          target="_blank"
                                          text="Register here"
                                          className="TechyCompetitions-box-description-Link"
                                          fontSize={"1vw"}
                                        />
          </div>

        </div>
        <div className="TechyCompetitions-Box-Image">
          <img src={competition.image}/>
        </div>
      </div>
      ))}



  
      </div>



    </div>
  );
}

export default TechyCompetitions;
