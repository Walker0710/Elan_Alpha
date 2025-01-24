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
                                                        to='https://www.instagram.com/elan_nvision.iith'>INSTAGRAM</Link>
            </div>
            <div className='Footer-Upper-Right-Link'><Link target={'_blank'}
                                                          to='https://x.com/elan_nvision'>X</Link></div>
            <div className='Footer-Upper-Right-Link'><Link target={'_blank'}
                                                           to='https://www.facebook.com/elannvision.iithyderabad/'>FACEBOOK</Link>
            </div>
            <div className='Footer-Upper-Right-Link'><Link target={'_blank'}
                                                           to='https://www.linkedin.com/company/elan-nvision-iith/'>LINKEDIN</Link>
            </div>
          </div>
        </div>



        <div className='Footer-Bottom'>
            <div className='Footer-Bottom-Heading Footer-Heading'>CONTACT US</div>
            <div className='Footer-Bottom-Poc-Container'>
              <div className='Footer-Bottom-Poc-Box'>
                <span className='Footer-Bottom-Poc-Name'>Mehul Srivastava</span>
                <span>Overall Head</span>
                <span>+91 63952 63137</span>
              </div>
              <div className='Footer-Bottom-Poc-Box'>
                <span className='Footer-Bottom-Poc-Name'>Vighnesh Sreepathi</span>
                <span>Vice Overall Head</span>
                <span>+91 81214 62682</span>
              </div>
              <div className='Footer-Bottom-Poc-Box'>
                <span className='Footer-Bottom-Poc-Name'>Dhruv Sharma</span>
                <span>Head of Public Relations</span>
                <span>+91 77027 36060</span>
              </div>
              <div className='Footer-Bottom-Poc-Box'>
                <span className='Footer-Bottom-Poc-Name'>Ananya S Reddy</span>
                <span>Head of Public Relations</span>
                <span>+91 63040 56873</span>
              </div>
              <div className='Footer-Bottom-Poc-Box'>
                <span className='Footer-Bottom-Poc-Name'>Anek Anjireddy</span>
                <span>Head of Sponsorship</span>
                <span>+91 99896 77207</span>
              </div>
              
            </div>
          </div>

          
      </div>
  );
}

export default Footer;
