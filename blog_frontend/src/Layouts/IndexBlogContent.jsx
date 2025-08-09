import { useEffect, useState } from "react";
import ripple from "../assets/ripple.gif";
const IndexBlogContent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogFunction = async () => {
      try {
        const res = await fetch("https://blog-backend-c7dz.onrender.com/api");
        const data = await res.json();
        setBlogs(data);
        console.log(data);
        console.log("blogs:", blogs);
      } catch (err) {
        console.log(err);
      }
    };
    blogFunction();
  }, []);
  return (
    <div className="index-blog-content">
      {blogs.length === 0 ? (
        <div
          style={{
            minHeight: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <img
            src={ripple}
            alt="Loading..."
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
            }}
          />
        </div>
      ) : (
        blogs.map((blog) => {
          return (
            <div className="blog">
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
                  className="blog-image"
                  style={{ backgroundImage: `url(${blog.image})` }}
                ></div>
              )}
              <div className="blog-title">{blog.title}</div>
              <div className="blog-date">
                By {blog.author} on {new Date(blog.date).toLocaleString()}
              </div>
              <div className="blog-description">{blog.article}</div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default IndexBlogContent;
