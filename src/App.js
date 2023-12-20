import classes from "./App.module.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className={classes.App}>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
