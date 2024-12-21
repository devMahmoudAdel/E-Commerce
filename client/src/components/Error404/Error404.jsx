import "./style.css";
import { useNavigate } from 'react-router-dom';

function Error404() {
  const navigate = useNavigate();
  return (
        <div className="err_container">
        <span className="err_message">404 Page not Found</span>
        <span>your visited page not found.You may go home page</span>
        <button className="err_home_btn" onClick={() => navigate('/')}>Back to Home Page</button>
      </div>
  );
}

export default Error404;
