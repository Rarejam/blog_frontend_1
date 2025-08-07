import { Link } from "react-router-dom";
const IndexContent = () => {
  return (
    <div className="index-content">
      <div>
        <div>View,Comment,Like BlOGS from Blogare</div>
        <div className="custom-btn">
          <button>
            <Link to="/signup" className="custom-link">
              Get Started
            </Link>
          </button>
          <button>
            <Link to="/index_blogs" className="custom-link">
              Blogs
            </Link>
          </button>
        </div>
      </div>
      <div className="blog_icon"></div>
    </div>
  );
};

export default IndexContent;
