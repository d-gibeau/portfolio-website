import pictureOfDaniel from "../../img/smiling-danny.jpg";

const Home = () => {
  return (
    <div className="page-view">
      <div className="home-content p-3 text-center container">
        <div className="d-flex justify-content-center col-12">
          <div className="row col-lg-4 home-pic-wrapper">
            <img
              src={pictureOfDaniel}
              alt="Daniel Gibeau"
              className="img-fluid home-pic"
            />
          </div>
        </div>
        <h1 className="mt-4">Hi, I'm Daniel Gibeau!</h1>
        <p>I'm a software developer currently based in Edmonton, Alberta.</p>
        <p>
          After nearly a decade of working in the food industry as a line cook,
          I decided to go back to school and switch careers into something I was
          more passionate about. I've always had an interest in computers and
          technology, so software development seemed like a great fit. So far
          it's been pretty fun!
        </p>
        <p>
          The main purpose of this website is to practice my web development
          skills. It is built in React. I used the "Create React App" tool to
          streamline the process. Some of the styling/layout was implemented
          using Bootstrap.
        </p>
      </div>
    </div>
  );
};

export default Home;
