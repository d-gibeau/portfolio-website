import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
const SPACING = 3;

const NavMenu = () => {
  return (
    <nav className="nav">
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
        spacing={SPACING}
      >
        <Button component={Link} to="/" variant="contained">
          Home
        </Button>
        <Button component={Link} to="/projects" variant="contained">
          Projects
        </Button>
        <Button component={Link} to="/cv" variant="contained">
          CV
        </Button>
        <Button component={Link} to="/about" variant="contained">
          About
        </Button>
      </Grid>
    </nav>
  );
};

export default NavMenu;
