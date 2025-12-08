import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-8 border-t border-night-700 bg-night-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 font-display"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">🦉</span>
            <span className="text-owl-cyan">Night</span>
            <span className="text-owl-purple">OwL</span>
            <span className="text-night-500">Dev</span>
          </motion.div>

          {/* Copyright */}
          <div className="text-night-500 text-sm text-center">
            <p>
              © {currentYear} Night OwL Developer. Built with{" "}
              <span className="text-owl-pink">♥</span> and lots of{" "}
              <span className="text-coffee-light">☕</span> at night.
            </p>
          </div>

          {/* Made with */}
          <div className="flex items-center gap-2 text-night-500 text-sm">
            <span>Made with</span>
            <span className="text-owl-cyan">React</span>
            <span>+</span>
            <span className="text-owl-blue">TypeScript</span>
            <span>+</span>
            <span className="text-owl-purple">Tailwind</span>
          </div>
        </div>

        {/* Fun message */}
        <motion.div
          className="text-center mt-6 text-night-600 text-sm font-display"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>// Current status: Probably coding at 3 AM 🌙</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
