import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeContent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogFunction = async () => {
      try {
        const res = await fetch("http://localhost:4000/");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };
    blogFunction();
  }, []);
  return (
    <div className="home-blog-content">
      {!blogs ? (
        <div>No blogs to view</div>
      ) : (
        blogs.map((blog) => (
          <Link
            to={`/home/${blog.id}`}
            key={blog.id}
            style={{ textDecoration: "none" }}
          >
            <div className="blog" key={blog.id}>
              {!blog.image ? (
                <div
                  className="home-blog-image"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "48px",
                  }}
                >
                  No Image
                </div>
              ) : (
                <div
                  className="home-blog-image"
                  style={{ backgroundImage: `url(${blog.image})` }}
                ></div>
              )}
              <div className="blog-title">{blog.title}</div>
              <div className="blog-date">
                By {blog.author} on {new Date(blog.date).toLocaleString()}
              </div>
              <div className="blog-description">{blog.article}</div>
              <div className="blog-published">
                {blog.isPublished == true ? "published ✅" : "Not published"}
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default HomeContent;
