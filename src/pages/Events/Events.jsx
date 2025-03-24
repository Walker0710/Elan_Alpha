import './Events.css';

import pronites1 from '../../assets/Events/pronites1.png'
import pronites2 from '../../assets/Events/pronites2.png'
import pronites3 from '../../assets/Events/pronites3.jpg'

import culti1 from '../../assets/Events/culti1.jpg'
import culti2 from '../../assets/Events/culti2.jpg'
import culti3 from '../../assets/Events/culti3.jpg'

import techy1 from '../../assets/Events/tech1.jpg'
import techy2 from '../../assets/Events/tech2.jpg'
import techy3 from '../../assets/Events/tech3.jpg'

import workshop1 from '../../assets/Events/workshop1.png'
import workshop2 from '../../assets/Events/workshop2.jpg'
import workshop3 from '../../assets/Events/workshop3.jpg'

import BgCont from '../../components/BgCont/BgCont';
import { Link } from 'react-router-dom';

function Events() {
  return (
    <div className="Events">
      <BgCont />

      <div className="Events-Inner">
        <div className="Events-Inner-Container">
          <div className="Events-Inner-Title glow-heading">Pronites</div>
          <div className="Events-Inner-About">
            Pronites are the highlight event of our fest, spanning three captivating evenings
            designed to leave the audience with unforgettable memories. Featuring a diverse array
            of performances by popular singers, musical bands, stand-up comedians and DJs,
            these talented artists bring their unique flair and energy to the stage, ensuring that every
            moment is filled with excitement and wonder. Our meticulously curated line-up, which
            has previously featured the likes of Darshan Raval, Zakir Khan, Divine, Shirley Setia,
            Gajendra Verma, The Local Train, When Chai Met Toast, Aashish Solanki, The Yellow
            Diary and many more, promises not only to entertain but also to create an electrifying
            atmosphere that resonates long after the event concludes.
          </div>
        </div>
        <div className="Events-Inner-Img-Container">
          <div className="Events-Inner-Img-Img">
            <img src={pronites1} alt='' width='100%' height='100%'/>
          </div>
          <div className="Events-Inner-Img-Img">
            <img src={pronites2} alt='' width='100%' height='100%'/>
          </div>
          <div className="Events-Inner-Img-Img">
            <img src={pronites3} alt='' width='100%' height='100%'/>
          </div>
        </div>
      </div>

      <div className="Events-Inner">
        <div className="Events-Inner-Container">
          <div className="Events-Inner-Title glow-heading">Culti</div>
          <div className="Events-Inner-About">
            Welcome to the Culti Competitions, where diversity and creativity intersect 
            in a series of dynamic events. These competitions showcase the rich cultural 
            tapestry and diverse talents of our community. Join us  as we celebrate 
            heritage, passion, and artistic excellence through engaging competitions 
            highlighting our participants&apos; unique contributions.
          </div>
          {/* <div className="Events-Inner-Learn-More">
            <Link to={'/culti-competitions'} className='glow-hover'>Click here for more</Link>
          </div> */}
        </div>
        <div className="Events-Inner-Img-Container">
          <div className="Events-Inner-Img-Img">
            <img src={culti1} alt='' width='100%' height='100%'/>
          </div>
          <div className="Events-Inner-Img-Img">
            <img src={culti2} alt='' width='100%' height='100%'/>
          </div>
          <div className="Events-Inner-Img-Img">
            <img src={culti3} alt='' width='100%' height='100%'/>
          </div>
        </div>
      </div>

      <div className="Events-Inner">
        <div className="Events-Inner-Container">
          <div className="Events-Inner-Title glow-heading">Techy</div>
          <div className="Events-Inner-About">
            Prepare to push the boundaries  of your skills and creativity as you dive into 
            a diverse array of challenges. From rapid-fire coding battles and cryptographic 
            puzzles to game development sprints and drone engineering, these contests will 
            test your problem-solving prowess, technical expertise, and ability to think 
            outside the box.<br/><br/>

            Get ready  to collaborate, compete, and create as you tackle real-world problems 
            and explore  the frontiers of technology. Choose your arena and let the innovation 
            begin!
          </div>
          {/* <div className="Events-Inner-Learn-More">
            <Link to={'/techy-competitions'} className='glow-hover'>Click here for more</Link>
          </div> */}
        </div>
        <div className="Events-Inner-Img-Container">
          <div className="Events-Inner-Img-Img">
            <img src={techy1} alt='' width='100%' height='100%'/>
          </div>
          <div className="Events-Inner-Img-Img">
            <img src={techy2} alt='' width='100%' height='100%'/>
          </div>
          <div className="Events-Inner-Img-Img">
            <img src={techy3} alt='' width='100%' height='100%'/>
          </div>
        </div>
      </div>

      <div className="Events-Inner">
        <div className="Events-Inner-Container">
          <div className="Events-Inner-Title glow-heading">Workshops</div>
          <div className="Events-Inner-About">
            Along with the joy and fun part of our fest their must be some learning cornerstone
            which are the workshops. The workshops help the attendees delve into cutting-edge
            topics in the industry, offering valuable insights and practical skills. They are designed and planned in
            such a way that they improve students&apos; critical thinking skills along with
            the technical takeaways. From emerging trends to established practices, our workshops
            cover a diverse range of subjects, ensuring attendees stay ahead of the curve.
          </div>
        </div>
        <div className="Events-Inner-Img-Container">
          <div className="Events-Inner-Img-Img">
            <img src={workshop1} alt='' width='100%' height='100%'/>
          </div>
          <div className="Events-Inner-Img-Img">
            <img src={workshop2} alt='' width='100%' height='100%'/>
          </div>
          <div className="Events-Inner-Img-Img">
            <img src={workshop3} alt='' width='100%' height='100%'/>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Events;
