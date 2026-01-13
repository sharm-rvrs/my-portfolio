import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="navbar"
    >
      <div className="nav-container">
        <div className="logo">Sharmaine</div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}
