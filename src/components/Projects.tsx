import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import ClueGame from "@/assets/ClueGame.png"
import AlgoBowl from "@/assets/AlgoBowl.png"

const featuredProjects = [
  {
    title: "Clue Game",
    description:
      "A full-stack adaptation of the board game Clue, featuring a Java backend and a Swing-based GUI. The implementation supports single-player gameplay with NPC opponents, includes real-time updating display/functionality features, and applies JUnit testing to ensure robust game logic validation.",
    tech: ["Java"],
    github: "https://github.com/acao-57/Clue",
    external: "#",
    image: ClueGame,
  },
  {
    title: "Same Game",
    description:
      "Private repo, available upon request! An algorithmic optimization project focusing on solving an NP-complete puzzle, leveraging bit arrays to achieve runtime improvements. Multiple heuristic stategies implemented to maximize solution scores, and a verifier to validate solutions.",
    tech: ["Python, C"],
    github: "https://github.com/acao-57/algobowl-2025",
    external: "#",
    image: AlgoBowl,
  },
];

const otherProjects = [
  {
    title: "Pet Pawpularity",
    description: "Machine learning project analyzing pet images to predict and score animal popularity.",
    tech: ["Python"],
    github: "https://github.com/acao-57/PetPawpularity",
    external: "#",
  },
  {
    title: "Wine Prediction",
    description: "Data science project that identifies correlations between various chemical properties and wine quality ratings.",
    tech: ["Python"],
    github: "https://github.com/acao-57/WinePrediction",
    external: "#",
  },
  {
    title: "Connect Four",
    description: "Terminal-based implementation of the Connect Four game.",
    tech: ["C++"],
    github: "https://github.com/acao-57/ConnectFour",
    external: "#",
  },
  {
    title: "Statistical Modeling",
    description: "Statistical Modeling project analyzing resort data to identify which customers are most likely to cancel a reservation.",
    tech: ["R"],
    github: "https://github.com/acao-57/StatsProject",
    external: "#",
  },
  {
    title: "Spotify Database",
    description: "Implementing normalized schema design for Spotify streaming data",
    tech: ["PostgreSQL"],
    github: "https://github.com/acao-57/DatabaseProject",
    external: "#",
  },
  {
    title: "Shell Interpreter",
    description: "A custom-built, restricted shell interpreter.",
    tech: ["C"],
    github: "https://github.com/acao-57/Shell-Interpreter",
    external: "#",
  },
];

const FeaturedProject = ({
  project,
  index,
  isInView,
}: {
  project: (typeof featuredProjects)[0];
  index: number;
  isInView: boolean;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative grid md:grid-cols-12 gap-4 items-center mb-24"
    >
      <div
        className={`md:col-span-7 relative ${isEven ? "md:col-start-1" : "md:col-start-6"}`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`aspect-video rounded-lg bg-gradient-to-br ${project.image} overflow-hidden relative group cursor-pointer`}
        >
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <span className="font-mono text-2xl text-primary/50">
              Project Preview
            </span> */}
          </div>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>

      <div
        className={`md:col-span-6 relative z-10 ${
          isEven
            ? "md:col-start-6 md:text-right"
            : "md:col-start-1 md:row-start-1"
        }`}
      >
        <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
        <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
          <a href={project.external}>{project.title}</a>
        </h3>
        <div className="bg-card p-6 rounded-lg shadow-xl mb-4">
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
        <ul
          className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${
            isEven ? "md:justify-end" : ""
          }`}
        >
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className={`flex gap-4 ${isEven ? "md:justify-end" : ""}`}>
          <a
            href={project.github}
            className="text-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={project.external}
            className="text-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: (typeof otherProjects)[0];
  index: number;
  isInView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        animate={{ y: isHovered ? -8 : 0 }}
        className="bg-card p-6 rounded-lg h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 border border-transparent hover:border-primary/20"
      >
        <div className="flex items-center justify-between mb-6">
          <Folder className="text-primary" size={40} />
          <div className="flex gap-3">
            <a
              href={project.github}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={project.external}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 text-3xl font-bold text-foreground mb-16"
        >
          <span className="text-primary font-mono text-xl">02.</span>
          Things I've Built
          <span className="h-px bg-border flex-1 ml-4 max-w-xs" />
        </motion.h2>

        {/* Featured Projects */}
        <div className="mb-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-2xl font-bold text-foreground mb-12"
        >
          Other Projects
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
