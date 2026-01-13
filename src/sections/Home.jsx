import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="section hero">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Hi, I’m <span>Sharmaine!</span>
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
        Passionate full-stack web developer with hands-on experience building
        web applications using C#, React, TypeScript, and a variety of modern
        libraries and frameworks. I focus on clean, efficient code and creating
        responsive, user-friendly experiences.
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

      {/* Floating GIF on the right */}
      <motion.img
        src="https://media.tenor.com/4EhUju6UJtEAAAAi/grrr-rawr.gif"
        alt="Hi sticker"
        className="hero-gif"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
    </section>
  );
}
