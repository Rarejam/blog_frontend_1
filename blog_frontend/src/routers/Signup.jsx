import { Link } from "react-router-dom";

const Signup = () => {
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
        <form action="">
          <div>SignUp</div>
          <div className="form-content">
            <label htmlFor="input">Input</label>
            <input type="text" name="input" id="input" />
          </div>
          <div className="form-content">
            <label htmlFor="input">Input</label>
            <input type="text" name="input" id="input" />
          </div>
          <div className="form-content">
            <label htmlFor="input">Input</label>
            <input type="text" name="input" id="input" />
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

          <div>
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
