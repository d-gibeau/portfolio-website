import Project from "../Project";
import PROJ_JSON from "../../data/projects/projects.json";
import websitePicture from "../../img/website-project.png";
import apiPicture from "../../img/API-assessment.jpg";

const Projects = () => {
  return (
    <div className="page-view">
      <div className="projects-view">
        {PROJ_JSON.projects.map((project, idx) => {
          return (
            <Project
              imgSrc={idx === 0 ? websitePicture : apiPicture}
              projName={project.projName}
              projDesc={project.projDesc}
              imgAlt={project.imgAlt}
              invert={idx % 2}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
