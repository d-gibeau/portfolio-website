import Project from "../Project";
import PROJ_JSON from "../../data/projects/projects.json";

const Projects = () => {
  return (
    <div className="page-view">
      <Project
        imgSrc={PROJ_JSON.website.imgSrc}
        projDesc={PROJ_JSON.website.projDesc}
        imgAlt={PROJ_JSON.website.imgAlt}
        invert={false}
      />
      <Project
        imgSrc={PROJ_JSON.website.imgSrc}
        projDesc={PROJ_JSON.website.projDesc}
        imgAlt={PROJ_JSON.website.imgAlt}
        invert={true}
      />
    </div>
  );
};

export default Projects;
