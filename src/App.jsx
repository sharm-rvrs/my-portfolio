import Navbar from "./components/navbar.jsx";
import Home from "./sections/home.jsx";
import Projects from "./sections/projects.jsx";
import Contact from "./sections/contacts.jsx";
import "./styles/global.css";
import Footer from "./sections/footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
