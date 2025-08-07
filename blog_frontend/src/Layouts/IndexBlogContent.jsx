import { useEffect, useState } from "react";

const IndexBlogContent = () => {
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
    <div className="index-blog-content">
      {!blogs ? (
        <div>No blogs to view</div>
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
