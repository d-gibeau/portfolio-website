import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default NavMenu;
