import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
  ];

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="flex items-center gap-4 text-3xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-xl">01.</span>
            About Me
            <span className="h-px bg-border flex-1 ml-4" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm a developer who loves creating things that live on the
                internet. My interest in web development started back when I
                discovered the magic of turning ideas into interactive
                experiences through code.
              </p>
              <p>
                Fast-forward to today, I've had the privilege of working on
                various projects ranging from small business websites to complex
                web applications. My main focus these days is building
                accessible, inclusive products and digital experiences.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>

              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                {technologies.map((tech, index) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-primary">▹</span>
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative group"
            >
              <div className="relative z-10 rounded-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/30 flex items-center justify-center">
                    <span className="text-4xl font-mono font-bold text-primary">
                      {"</>"}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-300" />
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;