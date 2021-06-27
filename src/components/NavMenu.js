import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../img/selfie-min.png";

const NavMenu = () => {
  return (
    <Navbar bg="header" expand="lg" className="header">
      <Navbar.Brand as={Link} to="/">
        <img src={Logo} alt="logo" className="header-logo img-fluid" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="header-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/projects" className="header-link">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/cv" className="header-link">
            CV
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="header-link">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMenu;
