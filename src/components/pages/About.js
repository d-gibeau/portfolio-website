const About = () => {
  return (
    <div className="page-view">
      <div className="row">
        <div className="col-xl-3 d-flex about-pic-wrap">
          <img
            src="./android-chrome-192x192.png"
            className="about-me-pic"
            alt="daniel-gibeau-with-fidel"
          />
        </div>
        <div className="col-xl-9">
          <h4>A Little About Me</h4>
          <p>
            I am an avid problem-solver and enjoy finding the most efficient
            solution. Refining code I have written to use as few lines as
            possible and work more efficiently is very satisfying. I am
            fascinated by how things work behind the scenes, both for people and
            for tech. Finding out people's experiences, values and beliefs helps
            me understand where they come from and what makes them tick.
          </p>
          <p>
            I am a quick learner and enjoy familiarizing myself with new
            technologies. I am an agreeable person by nature; I get along with
            almost everyone I meet. I am honest and hard-working, although I can
            be somewhat reserved with people I am not comfortable with yet. I am
            equally comfortable quietly working on something by myself or in
            tandem with a tight-knit team of passionate people. Remaining
            adaptable and open to new solutions/experiences is valuable to me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
