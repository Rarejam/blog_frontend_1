import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login_email, setLogin_email] = useState("");
  const [login_password, setLogin_password] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // const email = e.target.login_email.value;
    // const password = e.target.login_password.value;

    const formData = {
      //these are comign form the state...so you will get the values form the state
      login_email,
      login_password,
    };

    try {
      const res = await axios.post("http://localhost:4000/login", formData);
      //get token from res.data.token
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      setErr(err.response.data.message || err.message);
    }
  }
  return (
    <div className="index-login">
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
          <div>Login</div>
          <div>{err}</div>
          <div className="form-content">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={login_email}
              onChange={(e) => setLogin_email(e.target.value)}
            />
          </div>
          <div className="form-content">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={login_password}
              onChange={(e) => setLogin_password(e.target.value)}
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
            Don't have an accout?
            <Link
              to="/signup"
              style={{
                color: "white",
              }}
            >
              Signup
            </Link>
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;
