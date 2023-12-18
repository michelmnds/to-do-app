import drop from "../../assets/drop.png";
import x from "../../assets/x.png";
import "./style.css";

// eslint-disable-next-line react/prop-types
export const Header = ({ setSideBar, sideBar }) => {
  return (
    <header className="headerContainer">
      <h1>TASK-MASTER</h1>

      {sideBar ? (
        <img
          style={{ cursor: "pointer", width: 30 }}
          src={x}
          alt=""
          onClick={() => {
            if (sideBar == true) {
              setSideBar(false);
            } else {
              setSideBar(true);
            }
          }}
        />
      ) : (
        <img
          style={{ cursor: "pointer" }}
          src={drop}
          alt=""
          onClick={() => {
            if (sideBar == true) {
              setSideBar(false);
            } else {
              setSideBar(true);
            }
          }}
        />
      )}
    </header>
  );
};
