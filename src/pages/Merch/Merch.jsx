import './Merch.css';

import BgCont from '../../components/BgCont/BgCont';

import MerchContainer from '../../components/MerchContainer/MerchContainer';

import spaceship_white_1 from '../../assets/Merch/spaceship white 1.png'

function Merch() {
  return (
    <div className="Merch">
      <BgCont/>

      <div className="Merch-Heading glow-heading">Merch</div>

      <div className="Merch-Container">
        <div className="Merch-Box"  style={{gridColumn: '1 / span 1', gridRow: '1 / span 1'}}>
          <a href='' className="Merch-Box-Link">
            <MerchContainer
                imgfront={spaceship_white_1}
                type="Sweatshirt"
                title="Spaceship"
            />
          </a>
          <div className="Merch-Buy-Button-Container">
            <div className="Merch-Buy-Button">BUY</div>
          </div>
        </div>
        <div className="Merch-Box"  style={{gridColumn: '2 / span 1', gridRow: '1 / span 1'}}>
          <a href='' className="Merch-Box-Link">
            <MerchContainer
                imgfront={spaceship_white_1}
                type="Sweatshirt"
                title="Spaceship"
            />
          </a>
          <div className="Merch-Buy-Button-Container">
            <div className="Merch-Buy-Button">BUY</div>
          </div>
        </div>
        
        
        <div className="Merch-Box"  style={{gridColumn: '3 / span 1', gridRow: '1 / span 1'}}>
          <a href='' className="Merch-Box-Link">
            <MerchContainer
                imgfront={spaceship_white_1}
                type="Sweatshirt"
                title="Spaceship"
            />
          </a>
          <div className="Merch-Buy-Button-Container">
            <div className="Merch-Buy-Button">BUY</div>
          </div>
        </div>

        <div className="Merch-Box"  style={{gridColumn: '4 / span 1', gridRow: '1 / span 1'}}>
        <a href='' className="Merch-Box-Link">
            <MerchContainer
                imgfront={spaceship_white_1}
                type="Sweatshirt"
                title="Spaceship"
            />
          </a>
          <div className="Merch-Buy-Button-Container">
            <div className="Merch-Buy-Button">BUY</div>
          </div>
        </div>

        <div className="Merch-Box"  style={{gridColumn: '1 / span 1', gridRow: '2 / span 1'}}>
        <a href='' className="Merch-Box-Link">
            <MerchContainer
                imgfront={spaceship_white_1}
                type="Sweatshirt"
                title="Spaceship"
            />
          </a>
          <div className="Merch-Buy-Button-Container">
            <div className="Merch-Buy-Button">BUY</div>
          </div>
        </div>

        <div className="Merch-Box"  style={{gridColumn: '2 / span 1', gridRow: '2 / span 1'}}>
        <a href='' className="Merch-Box-Link">
            <MerchContainer
                imgfront={spaceship_white_1}
                type="Sweatshirt"
                title="Spaceship"
            />
          </a>
          <div className="Merch-Buy-Button-Container">
            <div className="Merch-Buy-Button">BUY</div>
          </div>
        </div>

        <div className="Merch-Box Merch-Box-Double"  style={{gridColumn: '3 / span 2', gridRow: '2 / span 1'}}>
        <a href='' className="Merch-Box-Link">
            <MerchContainer
                imgfront={spaceship_white_1}
                type="Sweatshirt"
                title="Spaceship"
            />
          </a>
          <div className="Merch-Buy-Button-Container">
            <div className="Merch-Buy-Button">BUY</div>
          </div>
        </div>

        <div className="Merch-Box"  style={{gridColumn: '1 / span 1', gridRow: '4 / span 1'}}>
        <a href='' className="Merch-Box-Link">
            <MerchContainer
                imgfront={spaceship_white_1}
                type="Sweatshirt"
                title="Spaceship"
            />
          </a>
          <div className="Merch-Buy-Button-Container">
            <div className="Merch-Buy-Button">BUY</div>
          </div>
        </div>

        <div className="Merch-Box"  style={{gridColumn: '2 / span 1', gridRow: '4 / span 1'}}>
        <a href='' className="Merch-Box-Link">
            <MerchContainer
                imgfront={spaceship_white_1}
                type="Sweatshirt"
                title="Spaceship"
            />
          </a>
          <div className="Merch-Buy-Button-Container">
            <div className="Merch-Buy-Button">BUY</div>
          </div>
        
        </div>

        <div className="Merch-Box"  style={{gridColumn: '3 / span 1', gridRow: '4 / span 1'}}>
        <a href='' className="Merch-Box-Link">
            <MerchContainer
                imgfront={spaceship_white_1}
                type="Sweatshirt"
                title="Spaceship"
            />
          </a>
          <div className="Merch-Buy-Button-Container">
            <div className="Merch-Buy-Button">BUY</div>
          </div>
        </div>

        <div className="Merch-Box"  style={{gridColumn: '4 / span 1', gridRow: '4 / span 1'}}>
        <a href='' className="Merch-Box-Link">
            <MerchContainer
                imgfront={spaceship_white_1}
                type="Sweatshirt"
                title="Spaceship"
            />
          </a>
          <div className="Merch-Buy-Button-Container">
            <div className="Merch-Buy-Button">BUY</div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Merch;
