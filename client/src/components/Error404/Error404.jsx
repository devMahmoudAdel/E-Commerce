import "./style.css";

function Error404() {
  return (
        <div className="container">
        <span className="errmessage">404 Page not Found</span>
        <span>your visited page not found.You may go home page</span>
        <button className="btn">Back to Home Page</button>
      </div>
  );
}

export default Error404;
