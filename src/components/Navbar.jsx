import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const links = document.querySelectorAll(".nav-links a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = targetElement.offsetTop - 80;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          SHARMAINE RIOVEROS
        </motion.div>

        <nav className="nav-links">
          {[
            { href: "#home", label: "HOME" },
            { href: "#projects", label: "PROJECTS" },
            { href: "#services", label: "SERVICES" },
            { href: "#about", label: "ABOUT" },
          ].map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ scale: 1.1, color: "var(--accent)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="#contact"
          className="contact-btn"
          whileHover={{ scale: 1.1, backgroundColor: "var(--accent)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Contact
        </motion.a>
      </div>
    </motion.header>
  );
}
