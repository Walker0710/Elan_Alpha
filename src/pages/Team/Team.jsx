import './Team.css';

import {
  creatives_team,
  culti_biggies_team,
  eml_team,
  heads,
  hospitality_team,
  informals_team,
  infrastructure_team,
  lit_team,
  multimedia_team,
  overall,
  production_team,
  pronites_team,
  public_relations_team,
  publicity_team,
  security_team,
  social_cause_team,
  sponsorship_team,
  techy_team, transport_team,
  web_team,
  workshop_team,
  logistics_team
} from '../../data/team.js';

import BgCont from '../../components/BgCont/BgCont';

function Team() {
  return (
    <div className="Team">
      <BgCont/>
      <div className="Team-Heading glow-heading">our team</div>

      <div className="Team-Member-Boxes-Container">
        {
          overall.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container" style={{backgroundImage: `url(${person.image})`}}>
                <div className="Team-Member-Position Head-Position">{person.position}</div>
                
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">Heads</div>

      <div className="Team-Member-Boxes-Container">
        {
          heads.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Position">{person.position}</div>
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">workshops team</div>
      <div className="Team-Member-Boxes-Container">
        {
          workshop_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">techy team</div>
      <div className="Team-Member-Boxes-Container">
        {
          techy_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">production team</div>
      <div className="Team-Member-Boxes-Container">
        {
          production_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">pronites team</div>
      <div className="Team-Member-Boxes-Container">
        {
          pronites_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">sponsorship team</div>
      <div className="Team-Member-Boxes-Container">
        {
          sponsorship_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">infrastructure team</div>
      <div className="Team-Member-Boxes-Container">
        {
          infrastructure_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">security team</div>
      <div className="Team-Member-Boxes-Container">
        {
          security_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">informals team</div>
      <div className="Team-Member-Boxes-Container">
        {
          informals_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">social cause team</div>
      <div className="Team-Member-Boxes-Container">
        {
          social_cause_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">creatives team</div>
      <div className="Team-Member-Boxes-Container">
        {
          creatives_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">multimedia team</div>
      <div className="Team-Member-Boxes-Container">
        {
          multimedia_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">culti & biggies team</div>
      <div className="Team-Member-Boxes-Container">
        {
          culti_biggies_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">lit team</div>
      <div className="Team-Member-Boxes-Container">
        {
          lit_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">eml team</div>
      <div className="Team-Member-Boxes-Container">
        {
          eml_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">public relations team</div>
      <div className="Team-Member-Boxes-Container">
        {
          public_relations_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">publicity team</div>
      <div className="Team-Member-Boxes-Container">
        {
          publicity_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">web team</div>
      <div className="Team-Member-Boxes-Container">
        {
          web_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">hospitality team</div>
      <div className="Team-Member-Boxes-Container">
        {
          hospitality_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">transport team</div>
      <div className="Team-Member-Boxes-Container">
        {
          transport_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>

      <div className="Team-Member-Headings">logistics team</div>
      <div className="Team-Member-Boxes-Container">
        {
          logistics_team.map((person, index) => (
            <div className="Team-Member-Box" key={index}>
              <div className="Team-Member-Position-Img-Container">
                <div className="Team-Member-Img">
                  <img src={person.image}/>
                </div>
              </div>
              <div className="Team-Member-Name">{person.name}</div>
            </div>
          ))
        }
      </div>
      

      

    </div>
  );
}

export default Team;
