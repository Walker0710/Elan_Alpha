import './PentagonLink.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PentagonLink = ({ href, text, fontSize }) => {
  const pentagonScale = 1.5; // Proportion of pentagon size to font size

  return (
    <div
      className="link-container"
      style={{
        fontSize,
        padding: `calc(${fontSize} * 0.5) calc(${fontSize} * 1.2)`, // Padding proportional to font size
      }}
    >
      <Link
        to={href}
        className="pentagon-link"
        style={{
          fontSize,
          paddingLeft: `calc(${fontSize} * ${pentagonScale + 0.5} * 0.5)`, // Space for pentagon + padding
        }}
      >
        {text}
        <span
          className="pentagon"
          style={{
            width: `calc(${fontSize} * ${pentagonScale} * 0.5)`,
            height: `calc(${fontSize} * ${pentagonScale})`,
            
          }}
        ></span>
      </Link>
    </div>
  );
};

PentagonLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
};

export default PentagonLink;
