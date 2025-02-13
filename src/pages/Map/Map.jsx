import './Map.css';

import map_img from '../../assets/Map/map.png';

import BgCont from '../../components/BgCont/BgCont';

function Map() {
  return (
    <div className="Map">
      <BgCont />
      <div className="Map-Heading glow-heading">map</div>
      <div className="Map-Container">
        <img src={map_img} alt="Map" className="Accommodation-Map_map" />
      </div>
    </div>
  );
}

export default Map;
