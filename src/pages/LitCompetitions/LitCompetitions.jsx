import './LitCompetitions.css';

import BgCont from '../../components/BgCont/BgCont';

import lit_competitions from '../../data/competitions_lit.js';

import PentagonLink from '../../components/PentagonLink/PentagonLink.jsx';

function LitCompetitions() {
  return (
    <div className="TechyCompetitions">
      <BgCont />
      <div className="TechyCompetitions-Heading glow-heading">Lit competitions</div>
      <div className="TechyCompetitions-Description">
        Step into a world where words weave magic and imagination knows no bounds. Our literary 
        competitions span the realms of quick-witted quizzing, poetic expression, and creative 
        writing. From testing your knowledge in high-stakes quiz battles to crafting verses that 
        stir emotions, these events celebrate every facet of literary talent. Whether you&apos;re a 
        master of trivia, a wordsmith weaving poetry, or a storyteller bringing characters to 
        life, here&apos;s your stage to showcase your command over language..
      </div>

      <div className="TechyCompetitions-Heading glow-heading">registration</div>

      <div className="TechyCompetitions-Boxes-container">
      {lit_competitions.map((competition, index) => (
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

export default LitCompetitions;
