import Navbar from "./components/Navbar";
import "./App.css";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Newsletter/>
    </>
  );
}

export default App;
