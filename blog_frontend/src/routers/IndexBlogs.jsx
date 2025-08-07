import { Link } from "react-router-dom";
import IndexBlogContent from "../Layouts/IndexBlogContent";

const IndexBlogs = () => {
  return (
    <div className="index-container">
      <div className="index-header">
        <div>Blogare</div>
        <div>
          <div>
            <Link to="/" className="custom-link">
              Home
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
      <div
        style={{
          fontSize: "36px",
          color: "#1e3a8a",
        }}
      >
        Login to Read and comment on Blogs
      </div>

      <IndexBlogContent />
    </div>
  );
};

export default IndexBlogs;
