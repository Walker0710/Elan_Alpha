import './ComingSoon.css';
import BgCont from '../../components/BgCont/BgCont';
import { useNavigate, Link } from 'react-router-dom';

function ComingSoon() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back one page in history
  };

  return (
    <div className="ComingSoon">
      <BgCont />

      <div className="coming-soon-container">
        <h1>Coming Soon. Go <Link to="#" onClick={goBack}>back</Link>?</h1>
      </div>
    </div>
  );
}

export default ComingSoon;
