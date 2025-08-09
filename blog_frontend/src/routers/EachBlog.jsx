import { Link, useNavigate, useParams } from "react-router-dom";
import send from "../assets/send.svg";
import axios from "axios";
import { useState, useEffect } from "react";

const EachBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const eachBlog = async () => {
      try {
        const res = await fetch(
          `https://blog-backend-c7dz.onrender.com/api/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.status === 403) {
          alert("Access denied youre not signed in yet");
          navigate("/login");
        }

        const data = await res.json();
        setBlog(data.blog);
        setComments(data.comments);
      } catch (err) {
        console.log(err);
      }
    };
    eachBlog();
  }, [id]);
  if (!blog) return <p>Loading...</p>;

  async function submitComment(e) {
    e.preventDefault();
    const res = await axios.post(
      "https://blog-backend-c7dz.onrender.com/api/comments",
      {
        //what we would post
        comment: userComment,
        blogId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setComments((prev) => [...prev, res.data]);
    setUserComment("");
  }

  return (
    <div className="home-blog">
      <div className="each-blog" key={blog.id}>
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
            className="each-blog-image"
            style={{ backgroundImage: `url(${blog.image})` }}
          ></div>
        )}
        <div className="blog-title">{blog.title}</div>
        <div className="blog-date">
          By {blog.author} on {new Date(blog.date).toLocaleString()}
        </div>
        <div className="each-blog-description">{blog.article}</div>
      </div>

      <div className="comment-container">
        <div>
          <form onSubmit={submitComment} className="comment-form">
            <textarea
              name="user_comment"
              id="user_comment"
              cols="55"
              rows="5"
              placeholder="add a comment"
              value={userComment}
              onChange={(e) => {
                setUserComment(e.target.value);
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <img
                src={send}
                alt="Send"
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </button>
          </form>
        </div>

        <div className="comment-div">
          {comments.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            comments.map((comment) => (
              <div className="each-comment-div" key={comment.id}>
                <div className="comment-user">~ {comment.username}:</div>{" "}
                {/* optional */}
                <div className="comment-detail">{comment.comment}</div>
                <div className="comment-date">
                  {new Date(comment.date).toLocaleString()}
                </div>
                <hr />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EachBlog;
