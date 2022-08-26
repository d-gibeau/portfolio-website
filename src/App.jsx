import { BrowserRouter as Router, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Feedback from "./components/pages/Feedback";
import CurriculumVitae from "./components/pages/CurriculumVitae";
import Projects from "./components/pages/Projects";
import "./style/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import usePageTracking from "./usePageTracking";

function App() {
  usePageTracking();

  return (
    <Router>
      <div className="wrapper">
        <NavMenu />
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/cv" component={CurriculumVitae} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Feedback} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
