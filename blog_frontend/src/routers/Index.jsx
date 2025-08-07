import { Outlet } from "react-router-dom";
import IndexContent from "../Layouts/IndexContent";
import IndexHeader from "../Layouts/IndexHeader";
import { IndexFooter } from "../Layouts/IndexFooter";

const Index = () => {
  return (
    <div className="index-container">
      <IndexHeader />

      <IndexContent />

      <IndexFooter />
    </div>
  );
};

export default Index;
