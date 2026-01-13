import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </>
  );
}
