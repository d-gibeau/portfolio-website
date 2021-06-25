import { GitHub, LinkedIn } from "@material-ui/icons";
import { Grid } from "@material-ui/core";

const CurriculumVitae = () => {
  return (
    <Grid container>
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
  );
};

export default CurriculumVitae;
