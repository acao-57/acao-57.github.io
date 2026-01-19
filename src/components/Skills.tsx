import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["TypeScript", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Python", "Java", "PostgreSQL", "C/C++", "R", "MongoDB", "Kotlin"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git/Github", "Docker", "AWS", "Linux", "Bash"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 text-3xl font-bold text-foreground mb-16"
        >
          <span className="text-primary font-mono text-xl">03.</span>
          Skills & Technologies
          <span className="h-px bg-border flex-1 ml-4 max-w-xs" />
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.15, duration: 0.5 }}
              className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 + 0.2 }}
                    className="px-3 py-1.5 text-sm font-mono rounded-lg bg-muted/50 text-foreground/80 border border-border/50 hover:border-primary/30 hover:text-primary transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;