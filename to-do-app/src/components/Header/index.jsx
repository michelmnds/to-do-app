import drop from "../../assets/drop.png";
import "./style.css";

export const Header = () => {
  return (
    <header className="headerContainer">
      <h1>TO-DO-APP</h1>

      <img src={drop} alt="" />
    </header>
  );
};
