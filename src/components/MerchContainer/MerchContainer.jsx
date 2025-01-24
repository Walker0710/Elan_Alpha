import './MerchContainer.css';

const MerchContainer = ({imgfront, imgback, type, title, side}) => {
  return (
    <div className="MerchContainer">
      <div className="MerchContainer-type">{type}</div>
      <div className="MerchContainer-img-container">
        <img className="MerchContainer-img" src={imgfront}></img>
      </div>
      <div className="MerchContainer-title-front-back">
        <div className="MerchContainer-title">{title}</div>
        <div className="MerchContainer-front-back">{side}</div>
      </div>
    </div>
  );
}

export default MerchContainer;
