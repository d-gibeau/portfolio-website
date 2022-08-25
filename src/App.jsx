import { BrowserRouter as Router, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Feedback from "./components/pages/Feedback";
import CurriculumVitae from "./components/pages/CurriculumVitae";
import Projects from "./components/pages/Projects";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
import "./style/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#264653",
      dark: "#1d353f",
    },
    secondary: {
      main: "#b0bec5",
      light: "#e2f1f8",
      dark: "#808e95",
    },
  },
  socialIcon: {
    "&:hover": {
      backgroundColor: "#e2f1f8 !important",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  );
}

export default App;
