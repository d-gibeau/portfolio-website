import WorkExperience from "../WorkExperience.js";
import WORK_EXP_JSON from "../../data/projects/work-exp.json";

const CurriculumVitae = () => {
  return (
    <div className="page-view">
      <section className="cv-personal-info">
        <h3>Daniel Gibeau</h3>
        <p>Edmonton, AB</p>
        <p>
          <a href="mailto:dgibeau@gmail.com">dgibeau@gmail.com</a>
        </p>
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
            Proven experience troubleshooting and debugging problems in code,
            enjoys finding the most efficient solution
          </li>
        </ul>
      </section>
      <section className="cv-skills">
        <h4>Known Technologies</h4>
        <h5>Languages</h5>
        <ul>
          <li>C#, JavaScript, Java, HTML, CSS, Dart</li>
        </ul>
        <h5>Frameworks</h5>
        <ul>
          <li>React.js, Jest, Vue.js, Bootstrap, .NET, Flutter, WPF, WCF</li>
        </ul>
        <h5>Databases</h5>
        <ul>
          <li>MSSQL Server, MongoDB, Oracle</li>
        </ul>
        <h4>Skills</h4>
        <ul>
          <li>Problem Solving</li>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Time Management</li>
          <li>Conceptual Thinking/Abstraction</li>
          <li>Adaptability</li>
        </ul>
      </section>
      <section className="cv-work-exp">
        <h4 className="cv-work-exp-h">Work Experience</h4>
        <section className="cv-work-exp-dev">
          <WorkExperience
            title={WORK_EXP_JSON.rms.title}
            company={WORK_EXP_JSON.rms.company}
            startDate={WORK_EXP_JSON.rms.startDate}
            endDate={WORK_EXP_JSON.rms.endDate}
            descriptors={WORK_EXP_JSON.rms.descriptors}
          />
          <WorkExperience
            title={WORK_EXP_JSON.capstone.title}
            company={WORK_EXP_JSON.capstone.company}
            startDate={WORK_EXP_JSON.capstone.startDate}
            endDate={WORK_EXP_JSON.capstone.endDate}
            descriptors={WORK_EXP_JSON.capstone.descriptors}
          />
        </section>
        <section className="cv-work-exp-culinary">
          <WorkExperience
            title={WORK_EXP_JSON.whiteSpot.title}
            company={WORK_EXP_JSON.whiteSpot.company}
            startDate={WORK_EXP_JSON.whiteSpot.startDate}
            endDate={WORK_EXP_JSON.whiteSpot.endDate}
            descriptors={WORK_EXP_JSON.whiteSpot.descriptors}
          />
          <WorkExperience
            title={WORK_EXP_JSON.deDutch.title}
            company={WORK_EXP_JSON.deDutch.company}
            startDate={WORK_EXP_JSON.deDutch.startDate}
            endDate={WORK_EXP_JSON.deDutch.endDate}
            descriptors={WORK_EXP_JSON.deDutch.descriptors}
          />
          <WorkExperience
            title={WORK_EXP_JSON.vivo.title}
            company={WORK_EXP_JSON.vivo.company}
            startDate={WORK_EXP_JSON.vivo.startDate}
            endDate={WORK_EXP_JSON.vivo.endDate}
            descriptors={WORK_EXP_JSON.vivo.descriptors}
          />
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
  );
};

export default CurriculumVitae;
