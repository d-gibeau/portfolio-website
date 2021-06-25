import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
const SPACING = 1;

const NavMenu = () => {
  return (
    <nav className="nav">
      <Grid container direction="row" justify="flex-end" spacing={SPACING}>
        <Grid item>
          <Button component={Link} to="/" variant="contained">
            Home
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/projects" variant="contained">
            Projects
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/cv" variant="contained">
            CV
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/about" variant="contained">
            About
          </Button>
        </Grid>
      </Grid>
    </nav>
  );
};

export default NavMenu;
