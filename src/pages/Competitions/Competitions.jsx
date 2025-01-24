import './Competitions.css';

import BgCont from '../../components/BgCont/BgCont';

import culti_rulebook from '../../assets/pdfs/culti rulebook 2025.pdf';

import PentagonLink from '../../components/PentagonLink/PentagonLink';

function Competitions() {
  return (
    <div className="Competitions">
      <BgCont/>
      <div className="Competitions-Descriptions-Container">
      <div className="Competitions-Descriptions-Box">
          <div className="Competitions-Descriptions-Heading glow-heading">Culti</div>
          <div className="Competitions-Descriptions-Description">
            Welcome to the Culti Competitions, where diversity and creativity intersect 
            in a series of dynamic events. These competitions showcase the rich cultural 
            tapestry and diverse talents of our community. Join us  as we celebrate 
            heritage, passion, and artistic excellence through engaging competitions 
            highlighting our participants&apos; unique contributions.<br/><br/>
            
            <a 
              href={culti_rulebook} 
              download={"elan_nvision_culti_rulebook"}
              style={{
                padding: '0',
                textDecoration: 'underline',
                color: 'white',
              }}
            >DOWNLOAD CULTI RULEBOOK</a>
          </div>
          <div className="Competitions-Descriptions-Learn-More">
            <PentagonLink
                              href="/culti-competitions"
                              text="CLICK HERE FOR MORE"
                              pentagonWidth={5}
                              pentagonHeight={25}
                              fontSize={"1vw"}
                            />
          </div>
        </div>
        <div className="Competitions-Descriptions-Box">
          <div className="Competitions-Descriptions-Heading glow-heading">Techy</div>
          <div className="Competitions-Descriptions-Description">
            Prepare to push the boundaries  of your skills and creativity as you dive into 
            a diverse array of challenges. From rapid-fire coding battles and cryptographic 
            puzzles to game development sprints and drone engineering, these contests will 
            test your problem-solving prowess, technical expertise, and ability to think 
            outside the box.<br/><br/>

            Get ready  to collaborate, compete, and create as you tackle real-world problems 
            and explore  the frontiers of technology. Choose your arena and let the innovation 
            begin! <br/><br/>

            <a 
              href="" 
              download={"elan_nvision_techy_rulebook"}
              style={{
                padding: '0',
                textDecoration: 'underline',
                color: 'white',
              }}
            >DOWNLOAD TECHY RULEBOOK</a>
          </div>
          <div className="Competitions-Descriptions-Learn-More">
          <PentagonLink
                              href="/techy-competitions"
                              text="CLICK HERE FOR MORE"
                              pentagonWidth={5}
                              pentagonHeight={25}
                              fontSize={"1vw"}
                            />
          </div>
        </div>
      </div>

      <div className="Competitions-Rule-Book-Container">

      </div>
    </div>
  );
}

export default Competitions;
