import NavMenu from "./NavMenu";
import "../style/Header.css";
import { ReactComponent as Logo } from "../logo.svg";
import { Link } from "react-router-dom";

const Header = ({ backgroundColor }) => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: backgroundColor,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <Logo style={{ width: "3rem", height: "3rem" }} alt="logo" />
      </Link>
      <NavMenu />
    </header>
  );
};

export default Header;
