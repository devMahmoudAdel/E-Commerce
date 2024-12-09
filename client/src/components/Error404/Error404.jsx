import "./style.css";
import { useNavigate } from 'react-router-dom';

function Error404() {
  const navigate = useNavigate();
  return (
        <div className="container">
        <span className="errmessage">404 Page not Found</span>
        <span>your visited page not found.You may go home page</span>
        <button className="btn" onClick={() => navigate('/')}>Back to Home Page</button>
      </div>
  );
}

export default Error404;