import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../img/logo.png";

const NavMenu = () => {
  return (
    <Navbar bg="header" expand="lg" className="header">
      <Navbar.Brand as={NavLink} to="/">
        <img src={Logo} alt="logo" className="header-logo img-fluid" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={NavLink}
            to="/"
            className="header-link"
            activeClassName="active-link"
            exact
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/projects"
            className="header-link"
            activeClassName="active-link"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/cv"
            className="header-link"
            activeClassName="active-link"
          >
            CV
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/about"
            className="header-link"
            activeClassName="active-link"
          >
            About
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact"
            className="header-link"
            activeClassName="active-link"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMenu;
