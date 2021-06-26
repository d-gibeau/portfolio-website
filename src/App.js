import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import CurriculumVitae from "./components/CurriculumVitae";
import Projects from "./components/Projects";
import { Container, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1a237e",
      light: "#534bae",
      dark: "#000051",
    },
    secondary: {
      main: "#263238",
      light: "#4f5b62",
      dark: "#000a12",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Router>
          <Header backgroundColor={theme.palette.primary.main} />
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/cv" component={CurriculumVitae} />
          <Route path="/about" component={About} />
          <Footer />
        </Router>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
