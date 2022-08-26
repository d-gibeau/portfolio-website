import { Grid } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";

const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <Grid container direction="row" justify="center" className="footer">
        <Grid item sm={6} align="right">
          <a
            href="https://www.linkedin.com/in/daniel-gibeau-723a2b15a/"
            target="_blank"
            rel="noreferrer"
            className="social-media-icon-box"
          >
            <LinkedIn fontSize="inherit" className="p-2 social-media-icon" />
          </a>
          <a
            href="https://github.com/d-gibeau"
            target="_blank"
            rel="noreferrer"
            className="social-media-icon-box ml-2"
          >
            <GitHub fontSize="inherit" className="p-2 social-media-icon" />
          </a>
        </Grid>
        <Grid item xs={12} sm={6} className="copyright" align="center">
          <p className="mb-0">
            Copyright Daniel Gibeau &copy; {date.getFullYear()}
          </p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
