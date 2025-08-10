import { Link } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Author = () => {
  const [errMessage, setErrMessage] = useState("");
  const [password, setPassword] = useState("");
  //   const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://blog-backend-c7dz.onrender.com/api/author",
        {
          author_password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //navigates to external urls
      window.location.href = "https://blog-frontend-2-7abu.vercel.app/";

      //navigates to insternal urls within react-router
      //   navigate("/home");
    } catch (err) {
      console.log(err);
      setErrMessage("wrong password");
    }
  };
  return (
    // <div>
    <div className="login-container">
      {/* <div className="login-content"> */}
      <form action="" onSubmit={handleSubmit}>
        <div>Author password</div>
        <div>{errMessage && <p style={{ color: "red" }}>{errMessage}</p>}</div>
        <div className="form-content">
          <label htmlFor="input">Input</label>
          <input
            type="password"
            name="author_password"
            id="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          style={{
            marginBottom: "10px",
            height: "5vh",
          }}
        >
          submit
        </button>
      </form>
      {/* </div> */}
    </div>
    // </div>
  );
};

export default Author;
