import { Outlet } from "react-router-dom";
import HomeHeader from "../Layouts/HomeHeader";

const Home = () => {
  return (
    <div className="home-container">
      <HomeHeader />
      <Outlet />
    </div>
  );
};

export default Home;
