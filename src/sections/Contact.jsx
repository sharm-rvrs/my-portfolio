import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        Feel free to reach out for collaborations or just a friendly hello 👋
      </motion.p>

      <div className="contact-links">
        <a href="mailto:your@email.com">your@email.com</a>
        <a href="https://github.com/yourusername" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
