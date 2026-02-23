import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-owl-cyan font-display text-sm tracking-wider">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white">
            The Developer Behind the Screen
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Illustration side */}
          <ScrollReveal direction="left">
            <div className="relative bg-linear-to-br from-night-800 to-night-700 rounded-2xl p-8 border border-night-600">
              {/* Terminal window */}
              <div className="bg-night-900 rounded-lg overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-night-800 border-b border-night-700">
                  <div className="w-3 h-3 rounded-full bg-owl-pink" />
                  <div className="w-3 h-3 rounded-full bg-owl-yellow" />
                  <div className="w-3 h-3 rounded-full bg-owl-green" />
                  <span className="ml-4 text-night-500 text-sm font-display">
                    ~/night-owl/about.ts
                  </span>
                </div>

                {/* Terminal content */}
                <div className="p-4 font-display text-sm leading-relaxed">
                  <p>
                    <span className="text-owl-purple">interface</span>{" "}
                    <span className="text-owl-yellow">Developer</span> {"{"}
                  </p>
                  <p className="pl-4">
                    <span className="text-owl-blue">name</span>:{" "}
                    <span className="text-owl-green">"Night OwL"</span>;
                  </p>
                  <p className="pl-4">
                    <span className="text-owl-blue">role</span>:{" "}
                    <span className="text-owl-green">
                      "Front-end Developer"
                    </span>
                    ;
                  </p>
                  <p className="pl-4">
                    <span className="text-owl-blue">status</span>:{" "}
                    <span className="text-owl-green">"Intern (Certified)"</span>
                    ;
                  </p>
                  <p className="pl-4">
                    <span className="text-owl-blue">location</span>:{" "}
                    <span className="text-owl-green">"Vietnam 🇻🇳"</span>;
                  </p>
                  <p className="pl-4">
                    <span className="text-owl-blue">coffeePerDay</span>:{" "}
                    <span className="text-owl-amber">Infinity</span>;
                  </p>
                  <p className="pl-4">
                    <span className="text-owl-blue">passions</span>: [
                  </p>
                  <p className="pl-8">
                    <span className="text-owl-green">"Clean Code"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-owl-green">"UI/UX Design"</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-owl-green">"Learning New Tech"</span>
                  </p>
                  <p className="pl-4">];</p>
                  <p>{"}"}</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-owl-purple/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-owl-cyan/20 rounded-full blur-xl" />
            </div>
          </ScrollReveal>

          {/* Text content side */}
          <ScrollReveal direction="right" delay={0.2}>
            <h3 className="text-2xl font-bold text-white mb-4">
              Coding When The World Sleeps 🌙
            </h3>

            <div className="space-y-4 text-night-500 leading-relaxed">
              <p>
                While most people are dreaming, I'm turning dreams into reality
                through code. There's something magical about the quiet hours of
                the night - just me, my keyboard, and an endless cup of coffee.
              </p>
              <p>
                As a <span className="text-owl-cyan">front-end developer</span>,
                I specialize in crafting beautiful, interactive user interfaces
                with <span className="text-owl-purple">React</span>,
                <span className="text-owl-blue"> TypeScript</span>, and
                <span className="text-owl-green"> Tailwind CSS</span>. I'm
                passionate about pixel-perfect designs, smooth animations, and
                delivering great user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source, or searching for the perfect brew
                to fuel my late-night sessions.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="/Tran-Huy-Hoang.pdf"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-night-800 border border-night-600 rounded-lg text-white hover:border-owl-purple hover:text-owl-purple transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </motion.a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
