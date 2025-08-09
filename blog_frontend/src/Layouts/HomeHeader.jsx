import { Link, useNavigate } from "react-router-dom";

const HomeHeader = () => {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div className="index-header">
      <div>Blogare</div>
      <div>
        <div>
          <Link to="/home" className="custom-link">
            Home
          </Link>
        </div>
        <div>
          <Link to="author" className="custom-link">
            Author
          </Link>
        </div>
        <div>
          <Link onClick={() => logout()} className="custom-link">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
