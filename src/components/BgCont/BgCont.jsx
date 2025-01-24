// BgCont.jsx
import './BgCont.css';
import bg from '../../assets/General/Group 39819.png';

function BgCont() {
  return (
    <div className="BgCont">
      <div className="BgCont-Overlay"></div>
      <img src={bg} alt="Background" />
    </div>
  );
}

export default BgCont;
