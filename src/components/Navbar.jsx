import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TypingLogo from "./typing-name";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="nav-container">
        {/* LOGO */}
        <div className="logo">
          <TypingLogo />
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav-links desktop">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
