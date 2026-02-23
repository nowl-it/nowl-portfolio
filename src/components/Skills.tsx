import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const frontendSkills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "HTML/CSS",
  "JavaScript",
];

const otherCategories = [
  {
    title: "Backend Basics",
    icon: "⚙️",
    color: "owl-purple",
    skills: ["Node.js", "Express", "REST API", "SQL", "Supabase", "Python"],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    color: "owl-green",
    skills: ["Git", "VS Code", "Linux", "Figma", "Docker", "Vercel"],
  },
  {
    title: "Reverse Engineering",
    icon: "🔓",
    color: "owl-yellow",
    skills: [
      "APK Decompilation",
      "IL2CPP Dump",
      "MITM Proxy",
      "AES Decryption",
      "Asset Extraction",
      "Frida",
    ],
  },
];

const learningSkills = ["Rust", "Go", "Kubernetes", "AWS", "GraphQL", "Redis"];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-owl-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-owl-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-owl-cyan font-display text-sm tracking-wider">
            MY SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">
            Technologies I Work With
          </h2>
          <p className="text-night-500 mt-4 max-w-2xl mx-auto">
            Focused on front-end development, always exploring new tools and
            frameworks
          </p>
        </ScrollReveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Frontend - Hero Card (spans 2 cols on large screens) */}
          <ScrollReveal className="lg:col-span-2" direction="left">
            <motion.div
              className="relative h-full bg-linear-to-br from-owl-cyan/10 via-night-800/80 to-night-800/50 backdrop-blur rounded-2xl p-8 border border-owl-cyan/30 overflow-hidden group"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-owl-cyan/10 rounded-full blur-3xl group-hover:bg-owl-cyan/20 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-14 h-14 bg-owl-cyan/20 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">🖥️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Frontend</h3>
                    <span className="text-owl-cyan text-sm font-display">
                      Primary Focus
                    </span>
                  </div>
                </div>

                <p className="text-night-500 text-sm mb-6 max-w-md">
                  Building beautiful, responsive, and interactive user
                  interfaces with modern web technologies
                </p>

                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2.5 bg-night-900/80 border border-owl-cyan/30 rounded-xl text-sm text-white font-medium hover:border-owl-cyan hover:text-owl-cyan hover:shadow-lg hover:shadow-owl-cyan/10 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right column - stacked cards */}
          <div className="flex flex-col gap-6">
            {otherCategories.map((category, catIdx) => (
              <ScrollReveal
                key={category.title}
                direction="right"
                delay={catIdx * 0.1}
              >
                <motion.div
                  className="bg-night-800/50 backdrop-blur rounded-2xl p-5 border border-night-700 hover:border-night-500 transition-all duration-300 group"
                  whileHover={{ x: -4 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-night-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">{category.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1.5 bg-night-900/60 border border-night-600 rounded-lg text-xs text-night-400 hover:text-white hover:border-night-500 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <ScrollReveal className="mt-12 text-center" delay={0.3}>
          <h4 className="text-night-500 mb-4">📚 Currently Learning:</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {learningSkills.map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-night-800/50 border border-night-700 rounded-full text-sm text-night-500 hover:text-owl-amber hover:border-owl-amber transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
