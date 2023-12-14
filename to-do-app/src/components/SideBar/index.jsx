import "./style.css";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};
