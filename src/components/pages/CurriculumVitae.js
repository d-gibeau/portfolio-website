import WorkExperience from "../WorkExperience.js";
import WORK_EXP_JSON from "../../data/cv/work-exp.json";
import SKILLS_JSON from "../../data/cv/skills.json";

const CurriculumVitae = () => {
  return (
    <div className="page-view">
      <div className="cv">
        <div className="row">
          <section className="cv-personal-info col-xl-3">
            <h1>Daniel Gibeau</h1>
            <p>Edmonton, AB</p>
            <ul>
              <li>
                Experienced using object-oriented-programming, utilizes best
                practices for software development flows and lifecycles
              </li>
              <li>
                Excellent communication skills, extremely adaptable to changing
                deadlines, rapidly learns new technologies and frameworks
              </li>
              <li>
                Proven experience troubleshooting and debugging problems in
                code, enjoys finding the most efficient solution
              </li>
            </ul>
          </section>
          <section className="cv-skills col-xl-9">
            <h4>Known Technologies</h4>
            <h5>Languages</h5>
            <ul className="cv-skills-list">
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                  alt="C#"
                  className="language-icon"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                  alt="Java"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                  alt="HTML 5"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                  alt="CSS 3"
                />
              </li>
            </ul>
            <h5>Frameworks</h5>
            <ul className="cv-skills-list">
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                  alt="React.js"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                  alt="Jest"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
                  alt="Vue.js"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                  alt="Bootstrap"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg"
                  alt=".NET"
                />
              </li>
            </ul>
            <h5>Databases</h5>
            <ul className="cv-skills-list">
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"
                  alt="Microsoft SQL Server"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="MongoDB"
                />
              </li>
              <li>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
                  alt="Oracle"
                />
              </li>
            </ul>
            <h5>Skills</h5>
            <ul className="cv-skills-list">
              {SKILLS_JSON.skills.map((skill, idx) => {
                return <li key={`skill-${idx}`}>{skill}</li>;
              })}
            </ul>
          </section>
        </div>
        <section className="cv-work-exp">
          <h4 className="cv-work-exp-h">Work Experience</h4>
          <section className="cv-work-exp-dev">
            {WORK_EXP_JSON.dev.map(function (experience, idx) {
              return (
                <WorkExperience
                  title={experience.title}
                  company={experience.company}
                  place={experience.place}
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                  descriptors={experience.descriptors}
                />
              );
            })}
          </section>
          <section className="cv-work-exp-culinary">
            {WORK_EXP_JSON.other.map(function (experience, idx) {
              return (
                <WorkExperience
                  title={experience.title}
                  company={experience.company}
                  place={experience.place}
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                  descriptors={experience.descriptors}
                />
              );
            })}
          </section>
        </section>
        <section className="cv-edu">
          <h4>Education</h4>
          <h5>
            Diploma in Digital Media and IT - Computer Software Development
            Designation (w/ Honours)
          </h5>
          <p>Northern Alberta Institute of Technology - Edmonton, AB</p>
          <p className="soft-text">January 2019 to December 2020</p>
        </section>
      </div>
    </div>
  );
};

export default CurriculumVitae;
