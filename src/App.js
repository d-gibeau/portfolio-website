import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import CurriculumVitae from "./components/CurriculumVitae";
import Projects from "./components/Projects";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="xl">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/cv" component={CurriculumVitae} />
        <Route path="/about" component={About} />
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
