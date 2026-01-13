import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="section hero">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Hi, I’m <span>Sharmaine</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        Software Developer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I build modern, responsive, and user-focused web applications with clean
        code and smooth animations.
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <a href="#projects" className="btn primary">
          View Projects
        </a>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
