import { GitHub, LinkedIn } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
const SPACING = 1.5;

const Footer = () => {
  return (
    <footer>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="baseline"
        spacing={SPACING}
      >
        <Grid item>
          <p>Copyright Daniel Gibeau &copy; 2021 | </p>
        </Grid>
        &nbsp;
        <Grid item>
          <a href="https://www.linkedin.com/in/daniel-gibeau-723a2b15a/">
            <LinkedIn />
          </a>
        </Grid>
        <Grid item>
          <a href="https://github.com/Ututu222">
            <GitHub />
          </a>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
