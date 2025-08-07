import { Link } from "react-router-dom";
const indexHeader = () => {
  return (
    <div className="index-header">
      <div>Blogare</div>
      <div>
        <div>
          <Link to="/index_blogs" className="custom-link">
            posts
          </Link>
        </div>
        <div>
          <Link to="/login" className="custom-link">
            Login
          </Link>
        </div>
        <div>
          <Link to="/signup" className="custom-link">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default indexHeader;
