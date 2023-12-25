import classes from "./App.module.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div className={classes.App}>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <div className={classes.footer}><Footer></Footer></div>
    </div>
  );
}

export default App;
