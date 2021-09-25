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
          <div className="cv-work-exp-item">
            <h5>RMS Welding Systems - Tech</h5>
            <p>
              <span className="soft-text">Nisku, AB</span>
            </p>
            <p>
              <span className="soft-text">June 2021 - Current</span>
            </p>
            <ul>
              <li>Refactoring code written in C#, WPF and WCF frameworks</li>
              <li>
                Updating and writing documnetation on how current software
                functions
              </li>
            </ul>
          </div>
          <div className="cv-work-exp-item">
            <h5>Capstone Project - Software Developer</h5>
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
              <li>
                Helped implement one-page website using Vue.js views and router
              </li>
              <li>
                Integral in development of proof-of-concept for user
                authentication
              </li>
              <li>
                Recognized by peers for clean, efficient, maintainable code
              </li>
              <li>
                Strong advocate and contributor to unit/integration testing
                using Jest framework
              </li>
            </ul>
          </div>
        </section>
        <section className="cv-work-exp-culinary">
          <div className="cv-work-exp-item">
            <h5>White Spot - Line Cook</h5>
            <p>
              <span className="soft-text">Surrey, BC</span>
            </p>
            <p>
              <span className="soft-text">April 2017 - January 2018</span>
            </p>
            <ul>
              <li>
                Stocked appropriate amounts of product, prepared orders in a
                timely manner following set plating standards and guidelines on
                all workstations (flattop, salad, grill/saute, dessert/fries)
              </li>
              <li>Maintained clean work environment throughout shifts</li>
              <li>
                Multi-tasked to finish extra dinner service objectives (e.g.
                clean hood vents, check stock levels, receive orders etc.)
                during service
              </li>
              <li>
                Trained new staff on multiple stations, made them feel welcome
                and part of the team
              </li>
            </ul>
          </div>
          <div className="cv-work-exp-item">
            <h5>DeDutch Pannekoek House - Line/Prep Cook</h5>
            <p>
              <span className="soft-text">Surrey, BC</span>
            </p>
            <p>
              <span className="soft-text">February 2017 - May 2018</span>
            </p>
            <ul>
              <li>
                Cooked breakfast food to order on flattop grill, including
                variable doneness of eggs
              </li>
              <li>
                Monitored stock levels of product, prep as needed throughout the
                day
              </li>
              <li>Maintained clean workspace throughout shift</li>
              <li>
                Operated independently as only back-of-house staff on weekdays,
                as a team member on weekends
              </li>
            </ul>
          </div>
        </section>
        <div className="cv-work-exp-item">
          <h5>vivo Ristorante - Dishwasher/Line Cook</h5>
          <p>
            <span className="soft-text">Edmonton, AB</span>
          </p>
          <p>
            <span className="soft-text">September 2011 - May 2016</span>
          </p>
          <ul>
            <li>
              Competency with all workstations (grill, forno, saute, salad)
            </li>
            <li>
              Detailed dish area and open kitchen, and maintained a clean
              workspace throughout shift
            </li>
            <li>
              Managed multiple tasks to meet variable deadlines consistently
            </li>
            <li>
              Met and exceeded stringent presentation and quality standards
            </li>
            <li>
              Followed proper rotation of ingredients, exacting in measurements
              for recipes to minimize food costs
            </li>
            <li>
              Helped train new staff in various areas of the kitchen, and
              provided them a warm welcome to the team
            </li>
          </ul>
        </div>
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
