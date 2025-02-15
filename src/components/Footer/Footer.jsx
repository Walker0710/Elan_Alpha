import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
      <div className='Footer' id='Footer'>
        <div className='Footer-Upper'>

          <div className="Footer-Upper-Left">
            <div className='Footer-Heading '>SEND AN EMAIL HERE</div>
            <div className='mail' id='mail'>
              <a href='mailto:elan@iith.ac.in' rel='noopener noreferrer'>elan@iith.ac.in
              </a>
            </div>

          </div>
          

          <div className='Footer-Upper-Right'>
            <div className='Footer-Upper-Right-Heading Footer-Heading'>SOCIALS</div>
            <div className='Footer-Upper-Right-Link'><Link target={'_blank'}
                                                        to='https://www.instagram.com/elan_nvision.iith' className='glow-hover'>INSTAGRAM</Link>
            </div>
            <div className='Footer-Upper-Right-Link'><Link target={'_blank'}
                                                          to='https://x.com/elan_nvision' className='glow-hover'>X</Link></div>
            <div className='Footer-Upper-Right-Link'><Link target={'_blank'}
                                                           to='https://www.facebook.com/elannvision.iithyderabad/' className='glow-hover'>FACEBOOK</Link>
            </div>
            <div className='Footer-Upper-Right-Link'><Link target={'_blank'}
                                                           to='https://www.linkedin.com/company/elan-nvision-iith/' className='glow-hover'>LINKEDIN</Link>
            </div>
          </div>
        </div>



        

          
      </div>
  );
}

export default Footer;
