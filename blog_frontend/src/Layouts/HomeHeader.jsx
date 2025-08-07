import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="index-header">
      <div>Blogare</div>
      <div>
        <div>
          <Link to="/home" className="custom-link">
            Home
          </Link>
        </div>
        <div>
          <Link to="/" className="custom-link">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
