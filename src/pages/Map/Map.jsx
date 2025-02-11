import './Map.css';

import map_img from '../../assets/Map/map.png';

import BgCont from '../../components/BgCont/BgCont';

function Map() {
  return (
    <div className="Map">
      <BgCont />
      <div className="Accommodation-Map-Heading Accommodation-Heading glow-heading">map</div>
      <div className="Accommodation-Map-Container">
        <img src={map_img} alt="Map" className="Accommodation-Map" />
      </div>
    </div>
  );
}

export default Map;
