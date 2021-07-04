import Project from "../Project";
import PROJ_JSON from "../../data/projects/projects.json";

const Projects = () => {
  return (
    <div className="page-view">
      <Project
        imgSrc={PROJ_JSON.website.imgSrc}
        projName={PROJ_JSON.website.projName}
        projDesc={PROJ_JSON.website.projDesc}
        imgAlt={PROJ_JSON.website.imgAlt}
        invert={false}
      />
      <Project
        imgSrc={PROJ_JSON.apiAssessment.imgSrc}
        projName={PROJ_JSON.apiAssessment.projName}
        projDesc={PROJ_JSON.apiAssessment.projDesc}
        imgAlt={PROJ_JSON.apiAssessment.imgAlt}
        invert={true}
      />
    </div>
  );
};

export default Projects;
