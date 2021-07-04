const CurriculumVitae = () => {
  return (
    <div className="page-view">
      <h3>Daniel Gibeau</h3>
      <p>Edmonton, AB</p>
      <p>
        <a href="mailto:dgibeau@gmail.com">dgibeau@gmail.com</a>
      </p>
      <ul>
        <li>
          Experienced using object-oriented-programming, utilizes best practices
          for software development flows and lifecycles
        </li>
        <li>Strong advocate for creating automated testing for code</li>
        <li>
          Excellent communication skills, extremely adaptable to changing
          deadlines, rapidly learns newtechnologies and frameworks
        </li>
        <li>
          Proven experience troubleshooting and debugging problems in code,
          enjoys finding the mostefficient solution
        </li>
      </ul>
      <h4 className="work-exp-h">Work Experience</h4>
      <h5>Software Developer</h5>
      <p>
        <span className="soft-text">Edmonton, AB</span>
      </p>
      <p>
        <span className="soft-text">September 2020 - December 2020</span>
      </p>
      <ul>
        <li>
          Developed MVP web application using MEVN stack using Agile-like
          methodology
        </li>
        <li>Helped implement one-page website using Vue.js views and router</li>
        <li>
          Integral in development of proof-of-concept for user authentication
        </li>
        <li>Recognized by peers for clean, efficient, maintainable code</li>
        <li>
          Strong advocate and contributor to unit/integration testing using Jest
          framework
        </li>
      </ul>
      <h4>Education</h4>
      <h5>Diploma in Digital Media and IT</h5>
      <p>Northern Alberta Institute of Technology - Edmonton, AB</p>
      <p>January 2019 to December 2020</p>
      <h4>Skills</h4>
      <h5>Languages</h5>
      <ul>
        <li>Java, C#, Dart, JavaScript, HTML, CSS</li>
      </ul>
      <h5>Frameworks</h5>
      <ul>
        <li>React.js, Jest, Vue.js, Bootstrap, .NET, Flutter</li>
      </ul>
      <h5>Databases</h5>
      <ul>
        <li>MSSQL Server, MongoDB, Oracle</li>
      </ul>
    </div>
  );
};

export default CurriculumVitae;
