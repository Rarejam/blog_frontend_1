import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [error, setErr] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const submitData = {
      username,
      email,
      password,
      confirm_password,
    };
    try {
      await axios.post("http://localhost:4000/signup", submitData);
      navigate("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.log(error);
        console.log(error.response.data);
        console.log(error.response.data.message);
        setErr(error.response.data.message);
      } else {
        setErr("Something went wrong");
      }
    }
  }
  return (
    <div className="index-signup">
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

      <div className="login-container">
        {/* <div className="login-content"> */}
        <form onSubmit={handleSubmit}>
          <div>SignUp</div>
          <div
            style={{
              color: "red",
              fontSize: "20px",
            }}
          >
            {error}
          </div>
          <div className="form-content">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-content">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-content">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-content">
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              value={confirm_password}
              onChange={(e) => {
                setConfirm_password(e.target.value);
              }}
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

          <div
            style={{
              fontSize: "17px",
            }}
          >
            Already have an accout?
            <Link
              to="/login"
              style={{
                color: "white",
              }}
            >
              Login
            </Link>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Signup;
