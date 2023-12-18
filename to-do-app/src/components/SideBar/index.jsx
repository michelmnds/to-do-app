import "./style.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SideBar = ({ sideBar }) => {
  if (sideBar) {
    return (
      <div className="sideBarContainer">
        <Link style={{ color: "black" }} to="/">
          Home
        </Link>
        <Link style={{ color: "black" }} to="/about">
          About
        </Link>
      </div>
    );
  }
};
