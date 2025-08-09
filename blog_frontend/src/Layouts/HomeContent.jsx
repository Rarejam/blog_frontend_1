import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import interwind from "../assets/interwind.gif";

const HomeContent = () => {
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const blogFunction = async () => {
      try {
        const res = await fetch("https://blog-backend-c7dz.onrender.com/api", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 403) {
          alert("Access denied youre not signed in yet");
          navigate("/login");
        }

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
      {blogs.length === 0 ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <img
            src={interwind}
            alt="Loading..."
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
            }}
          />
        </div>
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
